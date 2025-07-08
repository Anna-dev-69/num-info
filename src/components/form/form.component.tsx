import { Button, Form, Input, Radio, RadioChangeEvent } from "antd";
import FormItem from "antd/es/form/FormItem";
import "./form.component.scss";
import { useState } from "react";
import { useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";
import useStore from "../../store";

const FormComponent = () => {
  const [value, setValue] = useState("");
  const [form] = useForm();
  const navigate = useNavigate();

  const handleFinish = (values: any) => {
    useStore.setState({ numInfo: values });

    navigate("/info");
  };

  return (
    <Form className="FormComponent" form={form} onFinish={handleFinish}>
      <FormItem
        name="radioGroup"
        rules={[{ required: true, message: "Пожалуйста, выберите информацию" }]}
      >
        <Radio.Group
          onChange={(e: RadioChangeEvent) => setValue(e.target.value)}
          value={value}
          options={[
            { value: 1, label: "Math" },
            { value: 2, label: "Trivia" },
            { value: 3, label: "Date" },
          ]}
        />
      </FormItem>

      <Form.Item shouldUpdate>
        {() => {
          const useRandom = form.getFieldValue("randomNumber");
          return (
            <Form.Item
              name="number"
              label="Выберите число"
              rules={[
                {
                  required: !useRandom,
                  message: "Пожалуйста, введите число",
                },
                {
                  validator: (_, value) => {
                    if (useRandom) return Promise.resolve();

                    if (
                      value === "" ||
                      isNaN(value) ||
                      value.includes("-") ||
                      value.includes("e")
                    ) {
                      return Promise.reject("Число должно быть в виде цифры");
                    }
                    if (form.getFieldValue("radioGroup") === 3) {
                      const str = value.toString().padStart(4, "0");
                      const month = parseInt(str.slice(0, 2), 10);
                      const day = parseInt(str.slice(2), 10);

                      if (
                        str.length !== 4 ||
                        month < 1 ||
                        month > 12 ||
                        day < 1 ||
                        day > 31
                      ) {
                        return Promise.reject(
                          "Введите дату в формате ММДД, например 0704"
                        );
                      }
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              <Input type="number" min={0} disabled={useRandom} />
            </Form.Item>
          );
        }}
      </Form.Item>

      <Button
        type="primary"
        htmlType="submit"
        style={{ backgroundColor: "rgb(49, 125, 173)" }}
      >
        Получить информацию
      </Button>
    </Form>
  );
};

export default FormComponent;
