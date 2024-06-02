import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Formatter } from "./interfaces/Formatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toOrFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")! as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let document: Formatter;
  let values: [string, string, number] = [toOrFrom.value, details.value, amount.valueAsNumber];

  if (type.value === "invoice") {
    document = new Invoice(...values);
  } else {
    document = new Payment(...values);
  }

  list.render(document, type.value, "end");
});
