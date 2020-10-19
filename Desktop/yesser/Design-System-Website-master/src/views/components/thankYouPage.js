import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import Radio from "../../components/radio";
import Button from "../../components/buttons/index";
import CodeIcon from "../../assets/images/code-icon.svg";
import UsageIcon from "../../assets/images/usage-icon.jpg";
import "./index.scss";
import github from "../../assets/images/github-2.png";
import sketch from "../../assets/images/sketch-2.png";
import { event } from "jquery";
class RadioButtom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlContent: "",
      copiedText: this.props.t("copy"),
    };
  }
  updateCopyText = (event) => {
    this.setState({ copiedText: this.props.t("Copied") });
  };
  render() {
    const { t, i18n } = this.props;
    const copyToClipboard = (event) => {
      var element = document.getElementById("htmlcode");
      var copyText = document.getElementById("cod-text").textContent;
      element.classList.remove("d-none");
      element.value = copyText;
      element.select();
      document.execCommand("copy");
      element.classList.add("d-none");
    };

    return (
      <div>
        <div className="bg-white border-radius p-4">
          <div className="row border-bottom mb-4">
            <div className="col-md-3">
              <h3 className="mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3">
                {t("components_thankYouPage")}
              </h3>
            </div>
            <div className="col-md-9" dir="ltr">
              <a
                href="https://github.com/GOV-SA/Design-system-prototype"
                target="_blank"
              >
                <Button
                  className="btn govsa-btn--outline--darkBlue mt-0 mt-md-3 mb-3 float-l"
                  text="Sketch"
                  icon={
                    <img
                      className="mx-1 position-img"
                      width="20"
                      src={sketch}
                    />
                  }
                ></Button>
              </a>
              <a
                href="https://github.com/GOV-SA/design-system-gov.sa"
                target="_blank"
              >
                <Button
                  className="btn govsa-btn--darkBlue mt-0 mt-md-3 mb-3 mx-2 float-l"
                  text={t("github-button")}
                  icon={
                    <img
                      className="mx-1 position-img"
                      width="20"
                      src={github}
                    />
                  }
                ></Button>
              </a>
            </div>
          </div>

          <p className="mt-4">{t("components_thank-you-page_description-1")}</p>
          <p className="">{t("components_thank-you-page_description-2")}</p>
          <p className="">{t("components_thank-you-page_description-3")}</p>

          <p className="mt-4 mb-1 font-weight-bold">
            {t("components_thank-you-page_different-elements")}
          </p>
          <ol>
            <li>{t("components_thank-you-page_different-elements-1")}</li>
            <li>{t("components_thank-you-page_different-elements-2")}</li>
            <li>{t("components_thank-you-page_different-elements-3")}</li>
          </ol>

          <h5 className="mt-4 text-darkBlue">
            {t("components_thank-you-page_example")}
          </h5>
          <p className="mb-0">{t("components_thank-you-page_example-1")}</p>

          <h5 className="mt-4 text-darkBlue">
            {t("components_thank-you-page_arabic")}
          </h5>
          <p className="mb-0">{t("components_thank-you-page_arabic-1")}</p>
          <p className="mb-0">{t("components_thank-you-page_arabic-2")} </p>
          <ol className="thank-you-list">
            <li>{t("components_thank-you-page_different-elements-1")}</li>
            <li>{t("components_thank-you-page_different-elements-2")}</li>
            <li>{t("components_thank-you-page_different-elements-3")}</li>
          </ol>

          <div class="container">
            <h2 class="mt-5 mb-4 text-center">{t("thank-you")}</h2>
            <p className="text-center">{t("dummy-data")}</p>
            <div class="d-flex justify-content-center my-5">
              <button type="button" class="btn govsa-btn--darkBlue px-5">
                {t("Go-to-homepage-but")}
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white px-4 mt-1">
          <div className="col-md-12 mt-4 mb-3 px-0">
            <div
              className="accordion govsa-accordion-website"
              id="accordionExample"
            >
              <div className="card">
                <button
                  className="collapsed card-header"
                  id="headingOne"
                  data-toggle="collapse"
                  data-target="#collapseOne1"
                  aria-expanded="false"
                  aria-controls="collapseOne1"
                >
                  <img src={CodeIcon} width="40" alt="" />
                  HTML <i className=" govsa-icon govsa--arrowdown"></i>
                </button>
                <div
                  id="collapseOne1"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <div className="row  bg-gray-pastel mb-3">
                      <textarea id="htmlcode" className="d-none" />
                      <div
                        className="col-md-12 mb-2"
                        onClick={(event) => copyToClipboard(event)}
                      >
                        <div className="row">
                          <div className="col-md-12 mb-2">
                            <button
                              className="btn govsa-btn--darkBlue mt-3 f-r"
                              onClick={this.updateCopyText}
                            >
                              {this.state.copiedText}
                            </button>
                          </div>
                        </div>
                        <div dir="ltr" className="col-md-12 mb-2 px-3">
                          <pre id="cod-text">
                            <code class="html hljs xml">
                              <span class="hljs-tag">
                                &lt;<span class="hljs-name">div</span>{" "}
                                <span class="hljs-attr">class</span>=
                                <span class="hljs-string">"container"</span>
                                &gt;
                              </span>
                              <span class="hljs-tag">
                                &lt;<span class="hljs-name">h2</span>{" "}
                                <span class="hljs-attr">class</span>=
                                <span class="hljs-string">
                                  "mt-5 mb-4 text-center"
                                </span>
                                &gt;
                              </span>
                              {t("thank-you")}
                              <span class="hljs-tag">
                                &lt;/<span class="hljs-name">h2</span>&gt;
                              </span>
                              <span class="hljs-tag">
                                &lt;<span class="hljs-name">p</span>{" "}
                                <span class="hljs-attr">className</span>=
                                <span class="hljs-string">"text-center"</span>
                                &gt;
                              </span>
                              {t("dummy-data")}
                              <span class="hljs-tag">
                                &lt;/<span class="hljs-name">p</span>&gt;
                              </span>
                              <span class="hljs-tag">
                                &lt;<span class="hljs-name">div</span>{" "}
                                <span class="hljs-attr">class</span>=
                                <span class="hljs-string">
                                  "d-flex justify-content-center my-5"
                                </span>
                                &gt;
                              </span>
                              <span class="hljs-tag">
                                &lt;<span class="hljs-name">button</span>{" "}
                                <span class="hljs-attr">type</span>=
                                <span class="hljs-string">"button"</span>{" "}
                                <span class="hljs-attr">class</span>=
                                <span class="hljs-string">
                                  "btn govsa-btn--darkBlue px-5"
                                </span>
                                &gt;
                              </span>
                              {t("Go-to-homepage-but")}
                              <span class="hljs-tag">
                                &lt;/<span class="hljs-name">button</span>
                                &gt;
                              </span>
                              <span class="hljs-tag">
                                &lt;/<span class="hljs-name">div</span>&gt;
                              </span>
                              <span class="hljs-tag">
                                &lt;/<span class="hljs-name">div</span>&gt;
                              </span>
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white px-4 mt-1">
          <div className="col-md-12 mt-4 mb-3 px-0">
            <div
              className="accordion govsa-accordion-website"
              id="accordionExample2"
            >
              <div className="card">
                <button
                  className="collapsed card-header"
                  id="headingOne2"
                  data-toggle="collapse"
                  data-target="#collapseOne2"
                  aria-expanded="false"
                  aria-controls="collapseOne2"
                >
                  <img src={UsageIcon} width="40" alt="" />
                  {t("usage")} <i className=" govsa-icon govsa--arrowdown"></i>
                </button>
                <div
                  id="collapseOne2"
                  className="collapse"
                  aria-labelledby="headingOne2"
                  data-parent="#accordionExample2"
                >
                  <div className="card-body pb-3">
                    <h6>{t("implemntation")}</h6>
                    <p className="mb-0">
                      {t("package-usage")}: import
                      'govsa-ds/theme/govsa-theme-global.scss'{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withNamespaces()(RadioButtom);
