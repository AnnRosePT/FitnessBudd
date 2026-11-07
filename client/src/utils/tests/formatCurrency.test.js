import { formatCurrency, formatK, pctChange } from "../formatCurrency";

describe("formatCurrency utility", () => {
  test("formats standard positive values in Indian Rupee format", () => {
    expect(formatCurrency(1000)).toBe("₹1,000");
    expect(formatCurrency(50000)).toBe("₹50,000");
    expect(formatCurrency(100000)).toBe("₹1,00,000");
  });

  test("handles zero and falsy numbers", () => {
    expect(formatCurrency(0)).toBe("₹0");
    expect(formatCurrency(null)).toBe("₹0");
    expect(formatCurrency(undefined)).toBe("₹0");
  });

  test("applies optional decimals formatting", () => {
    expect(formatCurrency(1234.56, { decimals: 2 })).toBe("₹1,234.56");
  });

  test("formats thousand abbreviations with formatK", () => {
    expect(formatK(1000)).toBe("₹1k");
    expect(formatK(15000)).toBe("₹15k");
    expect(formatK(0)).toBe("₹0k");
  });

  test("calculates percentage changes correctly", () => {
    expect(pctChange(150, 100)).toBe(50);
    expect(pctChange(80, 100)).toBe(-20);
    expect(pctChange(100, 0)).toBeNull();
  });
});
