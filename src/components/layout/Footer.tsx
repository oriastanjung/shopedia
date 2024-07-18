import React , {FC} from "react"

interface FooterProps {
}

const Footer : FC<FooterProps> = ({}) => {
  return (
      <footer className="p-10 w-full flex items-center justify-center border-t"> Copyright 2024 | Made By O. Riastanjung | Github : oriastanjung </footer>
  );
}

export default Footer