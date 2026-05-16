---
title: "Testing Markdown, Code, and Mermaid"
date: 2025-03-15T10:00:00Z
slug: "test-content-types"
type: "blog"
categories: ["Testing"]
tags: ["Markdown", "Mermaid", "Code"]
description: "A comprehensive test to ensure all technical documentation formats render correctly."
featured_image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800"
---

This post verifies that the site's rendering pipeline supports all required technical writing formats seamlessly.

## 1. Standard Markdown

You can write normal markdown content easily:
* **Bold text** and *italic text*.
* Lists with multiple items.
* [Links to external sites](https://youssef-bensalem.com)
* Blockquotes for important callouts.

> "A well-architected system is a joy to behold." 
> — Youssef Ben Salem

## 2. Source Code Highlighting

Writing code is natively supported via Hugo's Chroma syntax highlighter. Here is a quick Python script:

```python
def fibonacci(n):
    """Return the nth Fibonacci number."""
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
```

And here is some `inline code` for quick references!

## 3. Mermaid Diagrams

We have dynamically injected Mermaid.js so it only loads when needed. Here is a complex sequence diagram describing an Event-Driven Architecture:

```mermaid
sequenceDiagram
    participant API as API Gateway
    participant OrderService as Order Service
    participant Kafka as Apache Kafka
    participant Inventory as Inventory Service

    API->>OrderService: POST /orders
    OrderService->>Kafka: Publish "OrderCreated" Event
    OrderService-->>API: 202 Accepted
    Kafka->>Inventory: Consume "OrderCreated" Event
    Inventory->>Inventory: Reserve Stock
    alt Stock Available
        Inventory->>Kafka: Publish "StockReserved" Event
    else Out of Stock
        Inventory->>Kafka: Publish "StockFailed" Event
    end
```

## 4. Excalidraw Architecture

As discussed, Excalidraw diagrams are exported as vector graphics (`.svg`) for perfect, responsive, and blazing-fast loading.

{{< svg src="/images/blog/excalidraw-example.svg" alt="Excalidraw Agentic Workflow Example" >}}

## 5. Standard Graphics (Raster Images)

For standard images like PNGs, JPEGs, or WebP files, you can use the `figure` shortcode. It inherits the identical premium UI presentation as the code and diagram blocks!

{{< figure src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Programming Setup" caption="A modern developer setup is essential for maximum productivity." >}}