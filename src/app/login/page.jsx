"use client";
import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { redirect, useRouter } from "next/navigation";

const page = () => {
  const [showError, setShowError] = useState(false);
  const router = useRouter();

  const onFinish = values => {
    if (values.username === "admin" && values.password === "admin1") {
      //   console.log("Success:", values);
      router.push("/dashboard");
    } else {
      setShowError(true);
    }
  };
  const onFinishFailed = errorInfo => {
    // console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex justify-center items-center h-[80vh] ">
      <Form
        className="border border-blue-600 py-10 px-10 rounded-lg"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}>
          <Input.Password />
        </Form.Item>
        {showError && (
          <div className="text-red-500 text-center">
            Invalid username or password
          </div>
        )}
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <div className="opacity-50">
          Username: admin <br />
          Password : admin1
        </div>
      </Form>
    </div>
  );
};

export default page;
