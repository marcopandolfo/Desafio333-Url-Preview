import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  FaQuestionCircle,
  FaCheckCircle,
  FaSearch,
  FaSyncAlt
} from "react-icons/fa";

import Code from "../../components/Code";

import { Container, Card, Form, Notification } from "./style";

import api from "../../services/api";
import DefaultButton from "../../components/Button";
import DefaultEmbed from "../../components/Embed";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      embed: true,
      domain: "",
      response: null,
      error: "",
      loading: false
    };
  }

  onClick = event => {
    if (!this.state.response)
      return this.setState({
        error: "Preencha o dominio para continuar!"
      });
    this.setState({ embed: !this.state.embed, error: "" });
  };

  handleDomain = async e => {
    e.preventDefault();
    await this.setState({ loading: true });
    const { domain } = this.state;
    if (!domain)
      return this.setState({ error: "Preencha o dominio para continuar!" });
    try {
      const { data } = await api.post("/", {
        url: domain
      });
      await this.setState({ response: data, error: "", loading: false });
    } catch (err) {
      this.setState({
        error: "Houve um problema ao verificar o dominio.",
        loading: false
      });
    }
  };

  render() {
    return this.state.embed ? (
      <Container>
        <Card>
          <Form onSubmit={this.handleDomain}>
            <input
              type="Domínio"
              placeholder="Domínio"
              onChange={e => this.setState({ domain: e.target.value })}
              required
            />
            <button type="submit">
              {this.state.loading ? (
                <FaSyncAlt className="spin" />
              ) : (
                <FaSearch />
              )}
            </button>
          </Form>
          {this.state.error && <Notification>{this.state.error}</Notification>}
          <Code data={JSON.stringify(this.state.response, null, 2)} />
          <DefaultButton red onClick={this.onClick.bind(this)}>
            <FaQuestionCircle /> NÃO ENTENDI
          </DefaultButton>
        </Card>
      </Container>
    ) : (
      <Container>
        <Card>
          <DefaultEmbed data={this.state.response} />
          <DefaultButton onClick={this.onClick.bind(this)}>
            <FaCheckCircle /> OK, PODE VOLTAR
          </DefaultButton>
        </Card>
      </Container>
    );
  }
}

export default withRouter(Home);
