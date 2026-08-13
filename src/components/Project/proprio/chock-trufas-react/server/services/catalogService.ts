import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export type CatalogProduct = {
  id: string;
  name: string;
  type: string;
  price: number;
  fillingOptions?: string[];
  comboRules?: Record<string, number>;
  comboItems?: Record<string, string[]>;
};

export const catalogService = {
  async getCatalog() {
    const filePath = resolve(__dirname, '..', 'data', 'catalog.json');
    const raw = await readFile(filePath, 'utf-8');
    const parsed = JSON.parse(raw) as { products?: CatalogProduct[] };

    const categories = Array.from(
      new Set((parsed.products ?? []).map((product) => product.type).filter(Boolean))
    );

    return {
      products: parsed.products ?? [],
      categories,
    };
  },
};
