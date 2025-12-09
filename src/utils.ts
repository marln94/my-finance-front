import { UTCDate } from "@date-fns/utc";

export function injectUpdateAt(data: object) {
  return {
    data: { ...data, updated_at: new Date() },
  };
}

export function formatMoney(n: number, usd: boolean = false) {
  return new Intl.NumberFormat(!usd ? "es-HN" : "en-US", {
    style: "currency",
    currency: !usd ? "HNL" : "USD",
  }).format(n);
}

export function formatDate(date: string) {
  return new UTCDate(date).toLocaleDateString("es-HN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
