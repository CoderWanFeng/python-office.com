---
title: Finance API Reference
sidebar_position: 2
---

# 💰 Finance API Reference

> *This page is currently only available in Chinese. Please switch to 简体中文 for the full content.*



# 💰 Finance API Reference

> Import: `import office`

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

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `buy_price` | float | - | Buy price |
| `sale_price` | float | - | Sell price |
| `shares` | int | - | Number of shares |
| `w_rate` | float | `2.5/10000` | Commission rate (0.025%) |
| `min_rate` | int | `5` | Minimum commission |
| `stamp_tax` | float | `1/1000` | Stamp tax rate (0.1%) |

## Examples

```python
import office

profit = office.finance.t0(buy_price=11.99, sale_price=12.26, shares=700)
print(f"T-Trade profit: ¥{profit:.2f}")
```

- 📖 [Usage Guide →](/modules/finance/guide)