import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { register } from "@/lib/actions";
import styles from "./register.module.css";

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={register}>
          <Input type="text" placeholder="name" name="name" required />
          <Input type="email" placeholder="email" name="email" required />
          <Input type="file" name="img" accept="image/*" required />
          <Input type="password" placeholder="password" name="password" required />
          <Input name="password_confirmation" type="password" placeholder="password_confirmation" required />
          <Button>Register</Button>
        </form>
      </div>
    </div>
  );
}
