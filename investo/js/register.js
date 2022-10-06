const prevBtn = document.querySelectorAll('.btn-prev');
const nextBtn = document.querySelectorAll('.btn-next');
const progress = document.getElementById('progress1');
const formSteps = document.querySelectorAll('.form-step');
const progressSteps = document.querySelectorAll('.progress-step')
let formStepsNum = 0;
var form = document.getElementById("form1");

function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('click', handleForm);



nextBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        formStepsNum++;
        updateFormSteps();
        updateProgresSteps();
    });
});
prevBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        formStepsNum--;
        updateFormSteps();
        updateProgresSteps();
    });
});

function updateFormSteps() {
    formSteps.forEach((formStep) => {
        formStep.classList.contains("form-step-active") &&
            formStep.classList.remove("form-step-active");
    });
    formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgresSteps() {
    progressSteps.forEach((progressStep, idx) => {
        if (idx < formStepsNum + 1) {
            progressStep.classList.add('progress-step-active');
        } else {
            progressStep.classList.remove('progress-step-active');
        }
    });
    const progressActive = document.querySelectorAll(".progress-step-active");
    progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}