import styled from 'styled-components'

export const Loader = styled.div`
  display: block;
  left: 50%;
  margin: 0px;
  position: absolute;
  text-align: center;
  top: 50%;
  z-index: 1000;
  /* 'transform' (%) doesn't seem to work with 'animation'. 
  Fixing it for now with an absolute value.
  TODO: Solve with relative value (%).*/
  -webkit-transform: translateY(-1.1rem);
  transform: translateY(-1.1rem);

  /* Static Shape */
  &:before {
    border-radius: 500rem;
    border: 0.2em solid rgba(0, 0, 0, 0.1);
    content: '';
    height: 100%;
    left: 50%;
    position: absolute;
    top: 0%;
    width: 100%;
  }

  /* Active Shape */
  &:after {
    content: '';
    height: 100%;
    left: 50%;
    border-radius: 500rem;
    border-color: #767676 transparent transparent;
    border-style: solid;
    border-width: 0.2em;
    box-shadow: 0px 0px 0px 1px transparent;
    position: absolute;
    top: 0%;
    width: 100%;
    animation: loader 0.6s linear;
    animation-iteration-count: infinite;
    -webkit-animation: loader 0.6s linear;
    -webkit-animation-iteration-count: infinite;
  }

  /* Active Animation */
  @-webkit-keyframes loader {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  &:before,
  &:after {
    height: 2.2rem;
    margin: 0em 0em 0em -1.14rem;
    width: 2.2rem;
  }

  /*!* Sizes *!
.ui.mini.loader:before,
.ui.mini.loader:after {
  width: 1rem;
  height: 1rem;
  margin: 0em 0em 0em -0.5rem;
}
.ui.tiny.loader:before,
.ui.tiny.loader:after {
  width: 1.14285714rem;
  height: 1.14285714rem;
  margin: 0em 0em 0em -0.57142857rem;
}
.ui.small.loader:before,
.ui.small.loader:after {
  width: 1.71428571rem;
  height: 1.71428571rem;
  margin: 0em 0em 0em -0.85714286rem;
}
.ui.loader:before,
.ui.loader:after {
  width: 2.28571429rem;
  height: 2.28571429rem;
  margin: 0em 0em 0em -1.14285714rem;
}
.ui.large.loader:before,
.ui.large.loader:after {
  width: 3.42857143rem;
  height: 3.42857143rem;
  margin: 0em 0em 0em -1.71428571rem;
}
.ui.big.loader:before,
.ui.big.loader:after {
  width: 3.71428571rem;
  height: 3.71428571rem;
  margin: 0em 0em 0em -1.85714286rem;
}
.ui.huge.loader:before,
.ui.huge.loader:after {
  width: 4.14285714rem;
  height: 4.14285714rem;
  margin: 0em 0em 0em -2.07142857rem;
}
.ui.massive.loader:before,
.ui.massive.loader:after {
  width: 4.57142857rem;
  height: 4.57142857rem;
  margin: 0em 0em 0em -2.28571429rem;
}

!*-------------------
      Coupling
--------------------*!


!* Show inside active dimmer *!
.ui.dimmer .loader {
  display: block;
}

!* Black Dimmer *!
.ui.dimmer .ui.loader {
  color: rgba(255, 255, 255, 0.9);
}
.ui.dimmer .ui.loader:before {
  border-color: rgba(255, 255, 255, 0.15);
}
.ui.dimmer .ui.loader:after {
  border-color: #FFFFFF transparent transparent;
}

!* White Dimmer (Inverted) *!
.ui.inverted.dimmer .ui.loader {
  color: rgba(0, 0, 0, 0.87);
}
.ui.inverted.dimmer .ui.loader:before {
  border-color: rgba(0, 0, 0, 0.1);
}
.ui.inverted.dimmer .ui.loader:after {
  border-color: #767676 transparent transparent;
}


!*******************************
             Types
*******************************!


!*-------------------
        Text
--------------------*!

.ui.text.loader {
  width: auto !important;
  height: auto !important;
  text-align: center;
  font-style: normal;
}


!*******************************
            States
*******************************!

.ui.indeterminate.loader:after {
  -webkit-animation-direction: reverse;
          animation-direction: reverse;
  -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
}
.ui.loader.active,
.ui.loader.visible {
  display: block;
}
.ui.loader.disabled,
.ui.loader.hidden {
  display: none;
}


!*******************************
            Variations
*******************************!


!*-------------------
        Sizes
--------------------*!


!* Loader *!
.ui.inverted.dimmer .ui.mini.loader,
.ui.mini.loader {
  width: 1rem;
  height: 1rem;
  font-size: 0.78571429em;
}
.ui.inverted.dimmer .ui.tiny.loader,
.ui.tiny.loader {
  width: 1.14285714rem;
  height: 1.14285714rem;
  font-size: 0.85714286em;
}
.ui.inverted.dimmer .ui.small.loader,
.ui.small.loader {
  width: 1.71428571rem;
  height: 1.71428571rem;
  font-size: 0.92857143em;
}
.ui.inverted.dimmer .ui.loader,
.ui.loader {
  width: 2.28571429rem;
  height: 2.28571429rem;
  font-size: 1em;
}
.ui.inverted.dimmer .ui.large.loader,
.ui.large.loader {
  width: 3.42857143rem;
  height: 3.42857143rem;
  font-size: 1.14285714em;
}
.ui.inverted.dimmer .ui.big.loader,
.ui.big.loader {
  width: 3.71428571rem;
  height: 3.71428571rem;
  font-size: 1.28571429em;
}
.ui.inverted.dimmer .ui.huge.loader,
.ui.huge.loader {
  width: 4.14285714rem;
  height: 4.14285714rem;
  font-size: 1.42857143em;
}
.ui.inverted.dimmer .ui.massive.loader,
.ui.massive.loader {
  width: 4.57142857rem;
  height: 4.57142857rem;
  font-size: 1.71428571em;
}

!* Text Loader *!
.ui.mini.text.loader {
  min-width: 1rem;
  padding-top: 1.78571429rem;
}
.ui.tiny.text.loader {
  min-width: 1.14285714rem;
  padding-top: 1.92857143rem;
}
.ui.small.text.loader {
  min-width: 1.71428571rem;
  padding-top: 2.5rem;
}
.ui.text.loader {
  min-width: 2.28571429rem;
  padding-top: 3.07142857rem;
}
.ui.large.text.loader {
  min-width: 3.42857143rem;
  padding-top: 4.21428571rem;
}
.ui.big.text.loader {
  min-width: 3.71428571rem;
  padding-top: 4.5rem;
}
.ui.huge.text.loader {
  min-width: 4.14285714rem;
  padding*/
`

export default Loader
