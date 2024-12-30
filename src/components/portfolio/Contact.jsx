import styled from "styled-components";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <ContactContainer id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </ContactContainer>
  );
}
const ContactContainer = styled.div`
  background-color: white;
  display: flex;

  /* @include mobile {
    flex-direction: column;
  } */

  .left {
    flex: 1;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 30px;
    }

    form {
      width: 70%;
      height: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      input {
        width: 300px;
        height: 30px;
        font-size: 14px;

        @include mobile {
          width: 200px;
          height: 20px;
        }
      }

      textarea {
        width: 300px;
        height: 200px;
        font-size: 14px;

        @include mobile {
          width: 200px;
          height: 100px;
        }
      }

      button {
        width: 150px;
        height: 30px;
        color: white;
        background-color: crimson;
        border: none;
        border-radius: 10px;
        font-weight: 500;
        cursor: pointer;

        &:focus {
          outline: none;
        }
      }

      span {
        color: green;
      }
    }
  }
`;
