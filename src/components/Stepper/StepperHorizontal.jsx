import React from 'react'
import "./BaseStep.scss"
import { ContainerStepper } from './styled';

export function BaseStep({
  customCss,
  isCompleted = false,
  isActive = false,
  label,
  number = 1,
  showDivider = true,
  vertical = false,
  ...props
}) {
  let css = 'base-step-item';
  let circleCss = 'base-step-item__circle';
  let textCss = 'base-step-item__text';
  let dividerCss = 'base-step-item__divider';
  if (customCss) {
    css += ` ${customCss}`;
  }

  if (isActive) {
    circleCss += ' base-step-item__circle--active';
    textCss += ' base-step-item__text--active';
    dividerCss += ' base-step-item__divider--active';
  } else if (isCompleted) {
    circleCss += ' base-step-item__circle--completed';
    textCss += ' base-step-item__text--active';
    dividerCss += ' base-step-item__divider--completed';
  }

  if (vertical) {
    dividerCss += ' base-step-item__divider--vertical';
  }

  return (
    <div className={css} {...props}>
      <div className="base-step-item__content">
        <div className={circleCss}>
          {isCompleted ? (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.87457 9.75016C4.70257 9.75008 4.53585 9.69083 4.40237 9.58236L1.80091 7.47358C1.64651 7.34819 1.54817 7.16665 1.5275 6.96882C1.50683 6.771 1.56552 6.57305 1.69066 6.41845C1.81598 6.26394 1.99753 6.16552 2.1954 6.14485C2.39326 6.12418 2.59124 6.18294 2.74579 6.30821L4.7653 7.94528L9.17066 2.52675C9.2961 2.37248 9.47768 2.27436 9.67546 2.25396C9.87323 2.23356 10.071 2.29255 10.2253 2.41797C10.3016 2.48026 10.3648 2.55696 10.4115 2.6437C10.4581 2.73044 10.4872 2.82552 10.497 2.9235C10.5069 3.02148 10.4974 3.12045 10.469 3.21475C10.4406 3.30905 10.394 3.39683 10.3316 3.47309L5.45701 9.47309C5.38673 9.55978 5.29795 9.62966 5.19717 9.6776C5.09639 9.72554 4.98617 9.75033 4.87457 9.75016Z" fill="#4F4FFF"/>
            </svg>
          ) : (
            <p>{number}</p>
          )}
        </div>
        <div className={textCss}>
          <p>{label}</p>
        </div>
      </div>
      {showDivider && <div className={dividerCss} />}
    </div>
  );
};

function StepperHorizontal({step, options}) {
  return (
    <ContainerStepper>
      {options.map((option, index) => {
        let number = index + 1;
        return (
          <BaseStep 
            key={index} 
            number={number}
            isCompleted={step > number} 
            isActive={number === step} 
            label={option.title}
            showDivider={option.showDivider}
          />
        )}
      )}
    </ContainerStepper>
  )
}

export { StepperHorizontal };
