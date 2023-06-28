import "./footer.css";

class Footer {
  footerElement: HTMLElement;

  constructor() {
    this.footerElement = document.createElement("footer");
  }

  public render() {
    this.footerElement.className = "footer";

    const copyright = document.createElement("p");
    copyright.className = "copyright";
    copyright.innerText = "2023 Copyright";

    const link = document.createElement("a");
    link.innerText = "Irina Isakzhanova";
    link.href =
      "https://github.com/rolling-scopes-school/iisakjanova-JSFE2023Q1";

    const logo = document.createElement("div");
    logo.className = "logo";

    const courseLink = document.createElement("a");
    courseLink.href = "https://rs.school/js/";

    const schoolLogo = document.createElement("img");
    schoolLogo.src = "https://rs.school/images/rs_school_js.svg";

    courseLink.append(schoolLogo);
    logo.append(courseLink);

    this.footerElement.append(copyright);
    this.footerElement.append(link);
    this.footerElement.append(logo);

    return this.footerElement;
  }
}

export default Footer;
