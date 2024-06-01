import { Invoice } from "./classes/invoice.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  const invoice = new Invoice(
    tofrom.value,
    details.value,
    amount.valueAsNumber
  );

  console.log(invoice);
});
