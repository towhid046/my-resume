export default function LoginForm() {
  return (
    <>
      <div>
        <div className="container">
          <div style={{ textAlign: "center" }} className="form_wrapper">
            <form action="">
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <button>Log in</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
