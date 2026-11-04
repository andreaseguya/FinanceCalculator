const form = document.getElementById("presentValueForm");
const result = document.getElementById("pvResult");

function calculatePresentValue() {
	const futureAmountInput = form.elements.futureAmount;
	const discountRateInput = form.elements.discountRate;
	const yearsInput = form.elements.years;
	const inputs = [futureAmountInput, discountRateInput, yearsInput];

	if (inputs.some((input) => input.value === "")) {
		result.textContent = "";
		return;
	}

	if (!form.checkValidity()) {
		result.textContent = "Check that the values are within the allowed ranges.";
		return;
	}

	const futureAmount = Number(futureAmountInput.value);
	const annualRate = Number(discountRateInput.value) / 100;
	const years = Number(yearsInput.value);
	const presentValue = futureAmount / Math.pow(1 + annualRate, years);

	if (!Number.isFinite(presentValue)) {
		result.textContent = "The result is outside the calculator's supported number range.";
		return;
	}

	const formattedValue = new Intl.NumberFormat(undefined, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(presentValue);

	result.textContent = `Present value today: ${formattedValue}`;
}

form.addEventListener("input", calculatePresentValue);
