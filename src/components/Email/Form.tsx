import { FormEvent, useState } from "react";
import "./Form.css";
import Loading from "./Loading";
function Form() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  function setStatesToFalse() {
    setLoading(false);
    setSuccess(false);
  }
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const mailGunFormData = new FormData();
    const message = `Via sandbox.mgsend.net
${formData.get("message")}}`;
    try {
      mailGunFormData.append("from", formData.get("email") as string);
      mailGunFormData.append("to", "clayton@srocha.io");
      mailGunFormData.append("subject", formData.get("subject") as string);
      mailGunFormData.append("text", message);

      const response = await fetch(
        `https://api.mailgun.net/v3/${process.env.REACT_APP_MAILGUN_DOMAIN}/messages`,
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${btoa(
              `api:${process.env.REACT_APP_MAILGUN_API_KEY}`,
            )}`,
          },
          body: mailGunFormData,
        },
      );

      if (response.ok) setSuccess(true);
      else setSuccess(false);

      console.log("Mailgun response:", response);
    } catch (error) {
      setLoading(false);
      setSuccess(false);
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {loading && <Loading type={success} onClose={setStatesToFalse} />}

      {/* <Loading type={success} setStatesToFalse={setStatesToFalse} /> */}

      <div className="emailContainer">
        <div className="flex">
          <label htmlFor="name">
            <h2>Nome</h2>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            required
          />
        </div>
        <div className="flex">
          <label htmlFor="email">
            <h2>Email</h2>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
          />
        </div>
        <div className="flex">
          <label htmlFor="subject">
            <h2>Assunto</h2>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Digite o assunto"
            required
          />
        </div>
      </div>
      {/* <div className="flex">
        <label htmlFor="to">Para:</label>
        <input
          type="email"
          id="to"
          name="to"
          placeholder="Digite o e-mail do destinatário"
          required
        />
      </div> */}

      <div className="textarea">
        <textarea
          spellCheck={false}
          id="message"
          name="message"
          placeholder="Digite sua mensagem"
          required
        />
      </div>
      <div className="emailFooter flex center gap-3">
        <button className="border boxShadow" type="submit">
          Enviar
        </button>
        <button className="border boxShadow" type="reset">
          Limpar
        </button>
      </div>
    </form>
  );
}

export default Form;
