# Computed Signals (read-only signals)

## Introducción

Las Computed signals son _read-only signals_ que su valor deriva de otras signals.

```typescript
const count: WritableSignal<number> = signal(0)
const doubleCount: Signal<number> = computed(() => count() * 2)
```

La signal `doubleCount` depende de la signal `count`. Cuando el valor de `count` cambie, Angular sabrá que el valor de `doubleCount` también debe cambiar (lazy y memoized).

## Requisitos

- Completa el componente de la carpeta `exercise` para que tenga un computed signal derivado de otro signal.
