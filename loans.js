const form = document.getElementById("loanForm");
const monthlyPaymentOutput = document.getElementById("monthlyPayment");
const totalRepaidOutput = document.getElementById("totalRepaid");
const totalInterestOutput = document.getElementById("totalInterest");

function clearResults() {
	monthlyPaymentOutput.textContent = "";
	totalRepaidOutput.textContent = "";
	totalInterestOutput.textContent = "";
}

function calculateLoan() {
	const loanAmountInput = form.elements.loanAmount;
	const annualRateInput = form.elements.annualRate;
	const termYearsInput = form.elements.termYears;
	const inputs = [loanAmountInput, annualRateInput, termYearsInput];

	if (inputs.some((input) => input.value === "")) {
		clearResults();
		return;
	}

	if (!form.checkValidity()) {
		clearResults();
		monthlyPaymentOutput.textContent = "Check the values and allowed ranges.";
		return;
	}

	const principal = Number(loanAmountInput.value);
	const annualRate = Number(annualRateInput.value) / 100;
	const monthlyRate = annualRate / 12;
	const numberOfPayments = Number(termYearsInput.value) * 12;
	const monthlyPayment = monthlyRate === 0
		? principal / numberOfPayments
		: principal * monthlyRate /
			(-Math.expm1(-numberOfPayments * Math.log1p(monthlyRate)));
	const totalRepaid = monthlyPayment * numberOfPayments;
	const totalInterest = totalRepaid - principal;

	if (![monthlyPayment, totalRepaid, totalInterest].every(Number.isFinite)) {
		clearResults();
		monthlyPaymentOutput.textContent = "The result is outside the calculator's supported number range.";
		return;
	}

	const formatter = new Intl.NumberFormat(undefined, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

	monthlyPaymentOutput.textContent = formatter.format(monthlyPayment);
	totalRepaidOutput.textContent = formatter.format(totalRepaid);
	totalInterestOutput.textContent = formatter.format(totalInterest);
}

form.addEventListener("input", calculateLoan);
