const form = document.getElementById("futureValueForm");
const result = document.getElementById("ans");

function calculateFutureValue() {
	const presentValueInput = form.elements.presentValue;
	const interestRateInput = form.elements.interestRate;
	const monthsInput = form.elements.months;
	const inputs = [presentValueInput, interestRateInput, monthsInput];

	if (inputs.some((input) => input.value === "")) {
		result.textContent = "";
		return;
	}

	if (!form.checkValidity()) {
		result.textContent = "Check that the values are within the allowed ranges.";
		return;
	}

	const presentValue = Number(presentValueInput.value);
	const annualRate = Number(interestRateInput.value);
	const months = Number(monthsInput.value);
	const monthlyRate = annualRate / 100 / 12;
	const futureValue = presentValue * Math.pow(1 + monthlyRate, months);

	if (!Number.isFinite(futureValue)) {
		result.textContent = "The result is outside the calculator's supported number range.";
		return;
	}

	const formattedValue = new Intl.NumberFormat(undefined, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(futureValue);

	result.textContent = `Future value after ${months} months: ${formattedValue}`;
}

form.addEventListener("input", calculateFutureValue);
