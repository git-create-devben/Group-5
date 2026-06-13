import "./Footer.css";

const GROUP_MEMBERS = [
  {
    name: "Miracle-Colours",
    url: "https://github.com/Miracle-colours",
  },
  {
    name: "Darasimi",
    url: "https://github.com/iiteoluwa",
  },
  {
    name: "Daniel",
    url: "https://github.com/danielasakpa1-star",
  },
  {
    name: "Damilola",
    url: "https://github.com/damilolaadeboye-davenkaygee",
  },
  {
    name: "Khalid",
    url: "https://github.com/khalid70-cyber/khalid",
  },
  {
    name: "Favour",
    url: "https://github.com/Favourngozi67",
  },
  {
    name: "Rossi",
    url: "https://github.com/Fernandorossi24",
  },
  {
    name: "Zulaihat",
    url: "https://github.com/zulleeyyy",
  },
  {
    name: "Ugoh",
    url: "https://github.com/ugohkim-art",
  },
  {
    name: "Seun",
    url: "https://github.com/Seunoke0310",
  },
  {
    name: "cry your cry",
    url: "https://github.com/cryyourcry",
  },
];

const GROUP_REPO = "https://github.com/Miracle-colours/Group-5.git";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__about">
          <h4 className="footer__heading">About</h4>
          <p className="footer__members">
            {GROUP_MEMBERS.map((member, index) => (
              <span key={member.name}>
                {member.url ? (
                  <a
                    href={member.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {member.name}
                  </a>
                ) : (
                  member.name
                )}
                {index < GROUP_MEMBERS.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </div>

        <div className="footer__separator" />

        <div className="footer__bottom">
          <div className="footer__copy-group">
            <p className="footer__copy">
              ©2026 Design by{" "}
              <a
                href="https://amakandukwu.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amaka
              </a>{" "}
              &amp;{" "}
              <a
                href="https://www.linkedin.com/in/ifeomaokocha"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ifeoma
              </a>
              .
            </p>
            <p className="footer__copy footer__copy--subtext">
              Built by{" "}
              <a href={GROUP_REPO} target="_blank" rel="noopener noreferrer">
                Group 5
              </a>
              . All rights reserved
            </p>
          </div>

          <div className="footer__links">
            <a
              href="https://tsacademyonline.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__ts-link"
            >
              TSAcademy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
