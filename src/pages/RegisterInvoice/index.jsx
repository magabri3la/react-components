import React from "react";
// import UploadXML from "./components/UploadXML";
import ArrowBack from "../../assets/arrow-back.svg";
import { GridContainer } from "../../components/GridContainer";
import { StepperHorizontal } from "../../components/Stepper";
import { TitleBack } from "../../components/TitleBack";
import { UploadInvoice } from "./components/UploadInvoice";
import { Padding, WrapperSteps, TextStyle } from "./styled";
import { COLORS } from "../../commons/colors";


const RegisterInvoice = ({ history }) => {
  const [step, setStep] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const [progress, setProgress] = React.useState(10);

  return (
    <>
      <GridContainer>
        <Padding>
          <TitleBack
            icon={ArrowBack}
            widthIcon="24px"
            heightIcon="24px"
            history={history}
            renderTitle={() => (
              <TextStyle
              color={COLORS.ACIAN_2}
              size="14"
              bold={700}
              lineHeight="16"
              margin="4px 0px 0px 8px"
              HiddenPaddingText
              >
                Atrás
              </TextStyle>
            )}
          />
          <StepperHorizontal
            options={[
              {
                title: "Carga las facturas",
                showDivider: true
              },
              {
                title: "Completa los datos",
                showDivider: true
              },
              {
                title: "Verificación de datos",
                showDivider: false
              },
            ]}
            step={step} 
          />
          <WrapperSteps>
            {step === 1 && (
              <UploadInvoice 
                setProgress={setProgress}
                setIsLoading={setIsLoading}
                setStep={setStep}
              />
            )}
            {/* {step === 2 && (
              <InvoiceData
                setProgress={setProgress}
                setIsLoading={setIsLoading}
                setStep={setStep}
                history={history}
              />
            )} */}
          </WrapperSteps>
        </Padding>
      </GridContainer>
    </>
  );
};

export default RegisterInvoice;
