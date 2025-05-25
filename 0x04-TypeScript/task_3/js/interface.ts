// Define RowID as a number
export type RowID = number;

// Define the structure of a row element
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // Optional
}