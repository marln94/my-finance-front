export function injectUpdateAt(data: object) {
  return {
    data: { ...data, updated_at: new Date() },
  };
}
