import SignUpForm from "../../SignUpForm/SignUpForm";
import SignupHero from "../../SignupHero/SignupHero";

export default function Signup() {
  return (
    <>
    <main>
      <div className="grid lg:grid-cols-2">
        <SignupHero/>
        <SignUpForm/>
      </div>
    </main>
    </>
  )
}
