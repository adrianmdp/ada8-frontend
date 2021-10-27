import { FC, FormEvent, useState } from "react";
import { addJobOffer } from "./api";

const defaultValues = {
  title: "",
  description: "",
  company: "",
  city: "",
  date: "",
  mod: "",
};

const AddJobOffer: FC = () => {
  const [inputs, setInputs] = useState(defaultValues);

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    addJobOffer(inputs);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Título</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="">Descripción</label>
        <textarea
          name="description"
          id="description"
          onChange={(e) =>
            setInputs({ ...inputs, description: e.target.value })
          }
        ></textarea>
      </div>

      <div>
        <label htmlFor="">Empresa</label>
        <input
          type="text"
          name="company"
          onChange={(e) => setInputs({ ...inputs, company: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="">Ciudad</label>
        <input
          type="text"
          name="city"
          onChange={(e) => setInputs({ ...inputs, city: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="">Fecha</label>
        <input
          type="date"
          name="date"
          onChange={(e) => setInputs({ ...inputs, date: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="">Modalidad</label>
        <select
          name="mod"
          id="mod"
          onChange={(e) => setInputs({ ...inputs, mod: e.target.value })}
        >
          <option value="onsite">Presencial</option>
          <option value="online">Remoto</option>
          <option value="blended">Hibrido</option>
        </select>
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export { AddJobOffer };
