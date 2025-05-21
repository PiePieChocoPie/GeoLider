export const tabs = [
  { key: "home", label: "Главная" },
  { key: "products", label: "Продукты" },
  { key: "services", label: "Услуги" },
  { key: "contacts", label: "Поддержка" },
  { key: "about", label: "О компании" },
] as const

export type TabKey = (typeof tabs)[number]["key"]