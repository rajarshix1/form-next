import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
// import '@/styles/formio.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'formiojs/dist/formio.full.min.css';

const DynamicForm = dynamic(
  () => import("@formio/react").then((module) => module.Form),
  {
    ssr: false,
  }
);

const SingleForm = () => {
  const router = useRouter();
  const slug = router.query.id;
  console.log(slug);
  const [singleForm, setSingleForm] = useState();
  const getForm = async () => {
    const forms = await axios.get("/api/form", {
      params: {
        id: slug,
      },
    });
    console.log(forms.data);
    setSingleForm(forms.data);
  };
  const submitHandler = async (e) => {
console.log(e);
    const submit = await axios.post("/api/form/submit", {
      formid: slug,
      data:e.data});
    console.log(submit.data);
    // setSingleForm(forms.data);
  };
  useEffect(() => {
    getForm();
  }, []);

  return (
    <>
      <div className="m-2 p-2">
      {singleForm && <h1>{singleForm.title}</h1>}
      </div>
      <div className="m-2 p-2">
      {singleForm && <DynamicForm
        form={{
          // title: singleForm.title,
          display: "form",
          components: singleForm.components,
        }} onSubmit={submitHandler}
      />}
      </div>
    </>
  );
};

export default SingleForm;
