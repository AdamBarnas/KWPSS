(*
 *
 * File: zbiorniki_objekt.st
 *
 * IEC 61131-3 Structured Text (ST) code generated for subsystem "zbiorniki_objekt/Subsystem"
 *
 * Model name                      : zbiorniki_objekt
 * Model version                   : 1.6
 * Model creator                   : lab
 * Model last modified by          : lab
 * Model last modified on          : Thu Apr 11 12:23:27 2024
 * Model sample time               : 0.1s
 * Subsystem name                  : zbiorniki_objekt/Subsystem
 * Subsystem sample time           : 0.1s
 * Simulink PLC Coder version      : 3.5 (R2021b) 14-May-2021
 * ST code generated on            : Thu Apr 11 12:28:06 2024
 *
 * Target IDE selection            : PLCopen XML
 * Test Bench included             : No
 *
 *)
FUNCTION_BLOCK Subsystem
VAR_INPUT
    ssMethodType: SINT;
    In1: LREAL;
    In2: LREAL;
    In3: LREAL;
END_VAR
VAR_OUTPUT
    Out1: LREAL;
    Out2: LREAL;
END_VAR
VAR
    c_DiscreteTimeIntegrator_DS: LREAL;
    c_DiscreteTimeIntegrator1_D: LREAL;
END_VAR
VAR_TEMP
    rtb_Product: LREAL;
END_VAR
CASE ssMethodType OF
    0: 
        (* SystemInitialize for Atomic SubSystem: '<Root>/Subsystem' *)
        (* InitializeConditions for DiscreteIntegrator: '<S1>/Discrete-Time Integrator' *)
        c_DiscreteTimeIntegrator_DS := 0.0;
        (* InitializeConditions for DiscreteIntegrator: '<S1>/Discrete-Time Integrator1' *)
        c_DiscreteTimeIntegrator1_D := 0.0;
        (* End of SystemInitialize for SubSystem: '<Root>/Subsystem' *)
    1: 
        (* Outputs for Atomic SubSystem: '<Root>/Subsystem' *)
        (* Outport: '<Root>/Out1' incorporates:
         *  DiscreteIntegrator: '<S1>/Discrete-Time Integrator' *)
        Out1 := c_DiscreteTimeIntegrator_DS;
        (* Outport: '<Root>/Out2' incorporates:
         *  DiscreteIntegrator: '<S1>/Discrete-Time Integrator1' *)
        Out2 := c_DiscreteTimeIntegrator1_D;
        (* Product: '<S1>/Product' incorporates:
         *  Constant: '<S1>/Constant3'
         *  DiscreteIntegrator: '<S1>/Discrete-Time Integrator'
         *  Sqrt: '<S1>/Sqrt' *)
        rtb_Product := (SQRT(c_DiscreteTimeIntegrator_DS) * 35.0) * In1;
        (* Update for DiscreteIntegrator: '<S1>/Discrete-Time Integrator' incorporates:
         *  Constant: '<S1>/Constant'
         *  Constant: '<S1>/Constant1'
         *  Product: '<S1>/Divide'
         *  Product: '<S1>/Product2'
         *  Sum: '<S1>/Sum2' *)
        c_DiscreteTimeIntegrator_DS := ((((In2 * 100.0) - rtb_Product) / 10.0) * 0.1) + c_DiscreteTimeIntegrator_DS;
        IF c_DiscreteTimeIntegrator_DS >= 40.0 THEN 
            c_DiscreteTimeIntegrator_DS := 40.0;
        ELSIF c_DiscreteTimeIntegrator_DS <= 0.0 THEN 
            c_DiscreteTimeIntegrator_DS := 0.0;
        END_IF;
        (* End of Update for DiscreteIntegrator: '<S1>/Discrete-Time Integrator' *)
        
        (* Update for DiscreteIntegrator: '<S1>/Discrete-Time Integrator1' incorporates:
         *  Constant: '<S1>/Constant2'
         *  Constant: '<S1>/Constant4'
         *  Product: '<S1>/Divide1'
         *  Product: '<S1>/Product1'
         *  Sqrt: '<S1>/Sqrt1'
         *  Sum: '<S1>/Sum' *)
        c_DiscreteTimeIntegrator1_D := (((rtb_Product - ((32.0 * In3) * SQRT(c_DiscreteTimeIntegrator1_D))) / 10.0) * 0.1) + c_DiscreteTimeIntegrator1_D;
        IF c_DiscreteTimeIntegrator1_D >= 40.0 THEN 
            c_DiscreteTimeIntegrator1_D := 40.0;
        ELSIF c_DiscreteTimeIntegrator1_D <= 0.0 THEN 
            c_DiscreteTimeIntegrator1_D := 0.0;
        END_IF;
        (* End of Update for DiscreteIntegrator: '<S1>/Discrete-Time Integrator1' *)
        (* End of Outputs for SubSystem: '<Root>/Subsystem' *)
END_CASE;
END_FUNCTION_BLOCK
