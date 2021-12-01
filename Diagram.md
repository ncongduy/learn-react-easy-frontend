# Diagram

## Components

```mermaid
graph TD;
App-->TodoFeature
TodoFeature-->TodoList
```
---

## Folder structure

```mermaid
graph TD;
src-->components-src
src-->features
features-->Todo
Todo-->components-Todo
Todo-->pages-Todo
Todo-->index.jsx-Todo
components-Todo-->TodoList
TodoList-->index.jsx-TodoList
TodoList-->styles.scss-TodoList
```