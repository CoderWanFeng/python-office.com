---
title: Finance API 参考
sidebar_position: 2
---

# 💰 Finance API 参考

> 导入：`import office`

## t0

```python
office.finance.t0(
    buy_price,
    sale_price,
    shares,
    w_rate=2.5/10000,
    min_rate=5,
    stamp_tax=1/1000
)
```

## 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `buy_price` | float | - | 买入价格 |
| `sale_price` | float | - | 卖出价格 |
| `shares` | int | - | 数量 |
| `w_rate` | float | `2.5/10000` | 手续费率（万 2.5） |
| `min_rate` | int | `5` | 最低手续费 |
| `stamp_tax` | float | `1/1000` | 印花税率（千 1） |

## 示例

```python
import office

profit = office.finance.t0(buy_price=11.99, sale_price=12.26, shares=700)
print(f"做 T 收益：¥{profit:.2f}")
```

- 📖 [使用指南 →](/modules/finance/guide)
