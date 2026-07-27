---
title: Finance Guide
description: Stock T+0 profit calculation
sidebar_position: 1
---

# 💰 Finance Module Guide

> *This page is currently only available in Chinese. Please switch to 简体中文 for the full content.*



# 💰 Finance Module Guide

The Finance module currently provides **Stock T+0 profit calculation**.

## Core Scenarios

### Calculate T-Trade Profit
```python
import office
profit = office.finance.t0(
    buy_price=11.99,
    sale_price=12.26,
    shares=700
)
print(f"T-Trade profit: ¥{profit:.2f}")
```

### Custom Fee Rates
```python
profit = office.finance.t0(
    buy_price=10.00,
    sale_price=10.50,
    shares=1000,
    w_rate=3.0/10000,
    min_rate=5,
    stamp_tax=1.5/1000
)
```

## Formula

```
Profit = Sale Amount - Buy Amount - Buy Commission - Sale Commission - Stamp Tax
```

Full API see [Finance API Reference](/modules/finance/api)