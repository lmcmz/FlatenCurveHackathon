import React, { Component, Fragment } from 'react'
import { FaInfoCircle, FaGithub } from 'react-icons/fa'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import { isMobile, isIPad13 } from 'react-device-detect'
import i18n from '../data/i18n.yml'

export default class Footer extends Component {
    state = {
        modal: false
    }

    toggle = () => this.setState({ modal: !this.state.modal })

    render() {
        const { lang, fullMap, fullPlot, fullTree } = this.props
        if (fullMap || fullPlot || fullTree) return <div />

        return (
            <Fragment>
                <div className="footer">
                    <span>
                        <a href="https://zeb.io">Zed Labs</a> 2020
                    </span>
                    <FaGithub
                        data-tip={!(isMobile || isIPad13) ? i18n.SOURCE_CODE[lang] : null}
                        size={18}
                        onClick={() => window.open('https://github.com/lmcmz')}
                    />
                </div>
            </Fragment>
        )
    }
}
