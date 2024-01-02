import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <center><Link to={"/"}><img src="https://cdn-icons-png.flaticon.com/512/188/188918.png" alt="" width={50}/></Link></center>
      </div>
    </header>
  );
}
