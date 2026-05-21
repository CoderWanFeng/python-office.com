import { AUTOMATION_DATA } from './automation-data';

export class PythonOfficeMCPServer {
  private tools = AUTOMATION_DATA;

  handleRequest(request: { name: string; arguments: Record<string, any> }) {
    const { name, arguments: args } = request;

    switch (name) {
      case 'search_automations':
        return this.search(args);
      case 'get_automation_details':
        return this.getDetails(args);
      case 'list_categories':
        return this.listCategories();
      case 'get_recommendations':
        return this.getRecommendations(args);
      default:
        return {
          content: [{
            type: 'text',
            text: `Unknown: ${name}. Available: search_automations, get_automation_details, list_categories, get_recommendations`
          }],
          isError: true
        };
    }
  }

  private search(args: { query?: string; category?: string }) {
    let results = [...this.tools];

    if (args.query) {
      const q = args.query.toLowerCase();
      results = results.filter(t =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }

    if (args.category) {
      results = results.filter(t => t.category === args.category);
    }

    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          count: results.length,
          automations: results.map(t => ({
            id: t.id,
            name: t.name,
            description: t.description,
            category: t.category,
            difficulty: t.difficulty,
            code_example: t.codeExample.split('\n')[0]
          }))
        }, null, 2)
      }]
    };
  }

  private getDetails(args: Record<string, any>) {
    const id = args.automation_id || args.id;
    const tool = this.tools.find(t => t.id === id);

    if (!tool) {
      return {
        content: [{ type: 'text', text: `Not found: ${id}` }],
        isError: true
      };
    }

    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          id: tool.id,
          name: tool.name,
          description: tool.descriptionForAI,
          category: tool.category,
          capabilities: tool.capabilities,
          use_cases: tool.useCases,
          code_example: tool.codeExample,
          difficulty: tool.difficulty,
          tags: tool.tags
        }, null, 2)
      }]
    };
  }

  private listCategories() {
    const categories = [...new Set(this.tools.map(t => t.category))];
    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          total: categories.length,
          categories: categories.map(cat => ({
            name: cat,
            count: this.tools.filter(t => t.category === cat).length
          }))
        }, null, 2)
      }]
    };
  }

  private getRecommendations(args: { use_case?: string }) {
    let results = [...this.tools];

    if (args.use_case) {
      const q = args.use_case.toLowerCase();
      results = results.filter(t =>
        t.useCases.some(uc => uc.toLowerCase().includes(q))
      );
    }

    results.sort((a, b) => b.popularity - a.popularity);

    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          recommendations: results.slice(0, 3).map(t => ({
            name: t.name,
            reason: t.useCases[0],
            example: t.codeExample.split('\n')[0]
          }))
        }, null, 2)
      }]
    };
  }
}

export const mcpServer = new PythonOfficeMCPServer();
