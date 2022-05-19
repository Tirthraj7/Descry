import React from "react";

const comonIcons = {
  mailer: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="17"
      viewBox="0 0 24 17"
    >
      <g>
        <g>
          <path
            fill="#e1e1e1"
            d="M2.872-.012h18.674c.842 0 .991.453.33 1.006l-8.274 6.934c-.375.315-.892.454-1.393.428-.503.026-1.02-.114-1.395-.428L2.541.994C1.881.44 2.03-.012 2.872-.012zm20.82 3.476v11.918c0 .89-.688 1.62-1.53 1.62H2.255c-.842 0-1.531-.73-1.531-1.62V3.464c0-.89.549-1.18 1.22-.64l9.041 7.263c.339.268.781.4 1.223.394.442.005.885-.126 1.223-.394l9.04-7.264c.672-.538 1.22-.25 1.22.641z"
          />
        </g>
      </g>
    </svg>
  ),
  lock: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="20"
      viewBox="0 0 16 20"
    >
      <g>
        <g>
          <path
            fill="#e1e1e1"
            d="M16 8.5V12a8 8 0 1 1-16 0V8.5c0-.275.225-.5.5-.5H3V5c0-2.757 2.243-5 5-5s5 2.243 5 5v3h2.5c.275 0 .5.225.5.5zM9.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM11 8V5c0-1.655-1.346-3-3-3S5 3.345 5 5v3z"
          />
        </g>
      </g>
    </svg>
  ),
  user: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <g>
        <g>
          <path
            fill="#e1e1e1"
            d="M19.33 17.066c-.875-1.195-5.319-.7-5.997-2.065-1.346-2.71-.796-2.206.08-2.877.823-.63.784-2.29 1.287-2.879.511-.598.746-2.313.554-2.959-.254-.856-.645-.39-.704-1.036-.127-1.393.224-2.54-.56-3.217-.758-.655-1.708-2.008-3.252-2.027-.539-.006-1.15.154-1.85.556C5.556.206 5.579 3.857 5.45 5.25c-.06.646-.45.18-.705 1.036-.192.646.044 2.36.554 2.96.504.589.465 2.249 1.287 2.878.877.671 1.427.168.08 2.878-.678 1.365-5.121.869-5.996 2.064C0 17.979 0 20 0 20h20s0-2.02-.67-2.934z"
          />
        </g>
      </g>
    </svg>
  ),
  packageIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="43"
      viewBox="0 0 44 43"
    >
      <defs>
        <clipPath id="j1zqa">
          <path
            fill="#fff"
            d="M21.5 11C27.299 11 32 15.7 32 21.5 32 27.299 27.299 32 21.5 32S11 27.299 11 21.5C11 15.7 15.701 11 21.5 11z"
          />
        </clipPath>
      </defs>
      <g>
        <g>
          <path
            fill="#ff2937"
            d="M8 0h28a8 8 0 0 1 8 8v27a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8z"
          />
        </g>
        <g>
          <path
            fill="none"
            stroke="#fff"
            strokeMiterlimit="20"
            strokeWidth="6"
            d="M21.5 11C27.299 11 32 15.7 32 21.5 32 27.299 27.299 32 21.5 32S11 27.299 11 21.5C11 15.7 15.701 11 21.5 11z"
            clipPath='url("#j1zqa")'
          />
        </g>
      </g>
    </svg>
  ),
  check: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 30">
      <defs></defs>
      <title>1</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            fill="#282828"
            d="M8,0H23a8,8,0,0,1,8,8V22a8,8,0,0,1-8,8H8a8,8,0,0,1-8-8V8A8,8,0,0,1,8,0Z"
          />
          <path
            className="cls-2"
            fill="#fff"
            d="M7.72,15l5.48,5.49L23.72,10,22.21,8.53l-9,9-4-4Z"
          />
        </g>
      </g>
    </svg>
  ),
  checkActive: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="30"
      viewBox="0 0 31 30"
    >
      <g>
        <g>
          <path
            fill="red"
            d="M8 0h15a8 8 0 0 1 8 8v14a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8z"
          />
        </g>
        <g>
          <image
            width="16"
            height="14"
            transform="translate(8 8)"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAAnUlEQVQ4T53TsQ0CMQxA0Xc7MAItEiOwBA1iBDaiQ8zBCjAALXOAfCIoHMmROxdJ4//l2HFnfnR4xjEnVjhhN0cQ8AUL3KYKcviBzRTBD4x7q6AIR/NCsMQZ+zAWOlqFk+CKNfo3DSSjcBLUkv7CSRD3MPmA43tUpco+L82bmEtSwiicV5CAprLzRpfGmL7ptjKVr0HV/kG/KC1L8gI2Cisr2b7F4gAAAABJRU5ErkJggg=="
          />
        </g>
      </g>
    </svg>
  ),
  rightLink: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-right"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  ),
  crossIcons: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="29"
      viewBox="0 0 35 29"
    >
      <g>
        <g>
          <path
            fill="#bebebe"
            d="M25.554-.003A9.594 9.594 0 0 1 35.1 9.545c0 9.641-17.55 19.188-17.55 19.188S0 19.046 0 9.545A9.548 9.548 0 0 1 9.547-.003a9.454 9.454 0 0 1 8.003 4.306 9.547 9.547 0 0 1 8.003-4.306z"
          />
        </g>
      </g>
    </svg>
  ),
  twitter: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="19"
      viewBox="0 0 23 19"
    >
      <g>
        <g>
          <image
            width="23"
            height="19"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAATCAYAAAB7u5a2AAACTElEQVQ4T6WUT0gUYRjGf+83k8HuapAldBGiIOpg2B/6iyTUoUDCCnei8hSE9zomrB08dIyooA5FqLNCZIciL1EkRJeu1ilJuiSYzq6UO/O9tbuuaayObd/pm/ne5/c83zsvIxTXPV3HFSmU9mtYzlBwBuEqyB4o6vStUZMpeIl3Rbk7GBwLHTspxQfHzw0IejdM17+JY7tDQUZFeqvUWZRHAgetENqmZOsCPB+AGlE6Qy81upKBOzh7WI0ZiwkwpaIZFCNktc7R/M8FgVWRjJ1O9Fdrk+PnHgLdcbcDpiK1RyptmQCaKyJRxlXoi5qSw7RLWHnv+Ln3wP4Y+OfIsSc51zBegrt+0KfI9Sqib6AjiIwJ5qPF3halNQY+HKVTXcUaKU1KY7DNROaxwN41XHn1EuVB5KUul+HPdb0T5HPA16WtqdVEkV6bTt4ow8uj+BpoqxW4TKdyKvKSLxbhrh+0KfIKMP9p8COSuc10NRU7UU5eSp8N0qi5D5qq2UDxIy/lLU5dZVM3kGuxhvMq9AAbajEwag5VfgHLkvNkttEpmE/AxlrAoM+idP3ppdrFtpTnPXdcYQRI/KPBdOSaFs4mJleElw6yM9sda64hcgLYugaTgkBHmE69/Lt2WfLKoesH7SB3FHbEwAuIXoq66v1qdcJQsBODuJFssUYOiGgnyr7YxMqEiL0QphtW/EsK2WCXo/SDdCwdzVXgM4LeCgvzN7nYOLtaiD9tyc41G7WewFFgN7Bp4cN+V/gi8AFlNJpPPqVb8rE3+13wC/ax0GEe5pWgAAAAAElFTkSuQmCC"
          />
        </g>
      </g>
    </svg>
  ),
  dashboard: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
    >
      <g>
        <g>
          <path
            fill="#fff"
            d="M10.106 14.325v4.497c0 .414-.355.75-.795.75h-8.19c-.44 0-.796-.336-.796-.75v-4.497c0-.414.356-.75.796-.75h8.19c.44 0 .795.336.795.75zm0-13.191v10.942c0 .414-.355.75-.795.75h-8.19c-.44 0-.796-.336-.796-.75V1.134c0-.414.356-.75.796-.75h8.19c.44 0 .795.336.795.75zm10.577 0V5.63c0 .414-.356.75-.795.75h-8.191c-.44 0-.795-.336-.795-.75V1.134c0-.414.356-.75.795-.75h8.19c.44 0 .796.336.796.75zm0 6.745v10.943c0 .414-.356.75-.795.75h-8.191c-.44 0-.795-.336-.795-.75V7.879c0-.414.356-.75.795-.75h8.19c.44 0 .796.336.796.75z"
          />
        </g>
      </g>
    </svg>
  ),
  notificationLink: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      viewBox="0 0 20 18"
    >
      <g>
        <g>
          <path
            fill="#fff"
            d="M19.908.056a.305.305 0 0 0-.323-.045L.172 8.789a.29.29 0 0 0-.174.26.29.29 0 0 0 .168.265l5.494 2.624c.1.048.22.038.31-.028l5.342-3.885-4.193 4.198a.287.287 0 0 0-.084.225l.418 5.292c.009.117.09.217.204.254a.306.306 0 0 0 .32-.086l2.916-3.289 3.605 1.676a.307.307 0 0 0 .248.004c.08-.033.14-.099.166-.18L19.996.363a.286.286 0 0 0-.088-.306z"
          />
        </g>
      </g>
    </svg>
  ),
  setting: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="22"
      viewBox="0 0 15 22"
    >
      <g>
        <g>
          <path
            fill="#fff"
            d="M11.242 4.562H3.758v-2.38h2.213l-.008-.705v-.022C5.967.652 6.655 0 7.5 0s1.533.652 1.537 1.455v.022l-.008.705h2.213zM15 2.768V22H0V2.768h2.29V5.96H12.71v-3.19zM12.086 18.13H2.914v1.397h9.172zm0-3.072H2.914v1.396h9.172zm0-3.073H2.914v1.397h9.172zm0-3.073H2.914v1.397h9.172z"
          />
        </g>
      </g>
    </svg>
  ),
  burger_menu: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="19"
      viewBox="0 0 29 19"
    >
      <g>
        <g>
          <path
            fill="#fff"
            d="M.001 1.213C.001.626.488.15 1.088.15h26.626c.6 0 1.087.477 1.087 1.064 0 .587-.487 1.064-1.087 1.064H1.088c-.6 0-1.087-.477-1.087-1.064zm0 7.98c0-.587.487-1.063 1.087-1.063h26.626c.6 0 1.087.476 1.087 1.064 0 .587-.487 1.064-1.087 1.064H1.088c-.6 0-1.087-.477-1.087-1.064zm0 7.981c0-.587.487-1.064 1.087-1.064h26.626c.6 0 1.087.477 1.087 1.064 0 .588-.487 1.065-1.087 1.065H1.088c-.6 0-1.087-.477-1.087-1.065z"
          />
        </g>
      </g>
    </svg>
  ),
  notification_nav: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="26"
      viewBox="0 0 22 26"
    >
      <g>
        <g>
          <path
            fill="#fff"
            d="M21.72 22.38a.513.513 0 0 1-.444.256h-7.19c.035.164.052.332.052.502-.002 1.386-1.145 2.512-2.552 2.512-1.406 0-2.55-1.126-2.55-2.512 0-.17.018-.338.052-.502H1.897a.513.513 0 0 1-.445-.256.496.496 0 0 1 .007-.505l1.752-2.876a8.455 8.455 0 0 0 1.236-4.396v-2.52c0-3.18 2.154-5.875 5.1-6.742v-1.8c0-1.108.914-2.01 2.04-2.01 1.124 0 2.04.902 2.04 2.01v1.8c2.945.867 5.099 3.562 5.099 6.742v2.52c0 1.548.427 3.068 1.235 4.396l1.752 2.876a.496.496 0 0 1 .007.505zM11.586 5.05c.346 0 .687.024 1.02.071V3.541c0-.555-.457-1.005-1.02-1.005s-1.02.45-1.02 1.005v1.58a7.272 7.272 0 0 1 1.02-.072zM2.797 21.63h17.578l-1.29-2.116a9.449 9.449 0 0 1-1.38-4.912v-2.52c0-3.325-2.744-6.03-6.119-6.03-3.375 0-6.12 2.705-6.12 6.03v2.52a9.44 9.44 0 0 1-1.38 4.912zm7.26 1.507a1.52 1.52 0 0 0 1.53 1.507 1.52 1.52 0 0 0 1.53-1.507c0-.17-.03-.342-.088-.502h-2.884c-.057.16-.088.332-.088.502z"
          />
          <path
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="20"
            d="M21.72 22.38a.513.513 0 0 1-.444.256h-7.19c.035.164.052.332.052.502-.002 1.386-1.145 2.512-2.552 2.512-1.406 0-2.55-1.126-2.55-2.512 0-.17.018-.338.052-.502H1.897a.513.513 0 0 1-.445-.256.496.496 0 0 1 .007-.505l1.752-2.876a8.455 8.455 0 0 0 1.236-4.396v-2.52c0-3.18 2.154-5.875 5.1-6.742v-1.8c0-1.108.914-2.01 2.04-2.01 1.124 0 2.04.902 2.04 2.01v1.8c2.945.867 5.099 3.562 5.099 6.742v2.52c0 1.548.427 3.068 1.235 4.396l1.752 2.876a.496.496 0 0 1 .007.505zM11.586 5.05c.346 0 .687.024 1.02.071V3.541c0-.555-.457-1.005-1.02-1.005s-1.02.45-1.02 1.005v1.58a7.272 7.272 0 0 1 1.02-.072zM2.797 21.63h17.578l-1.29-2.116a9.449 9.449 0 0 1-1.38-4.912v-2.52c0-3.325-2.744-6.03-6.119-6.03-3.375 0-6.12 2.705-6.12 6.03v2.52a9.44 9.44 0 0 1-1.38 4.912zm7.26 1.507a1.52 1.52 0 0 0 1.53 1.507 1.52 1.52 0 0 0 1.53-1.507c0-.17-.03-.342-.088-.502h-2.884c-.057.16-.088.332-.088.502z"
          />
        </g>
      </g>
    </svg>
  ),
  logout: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="21"
      viewBox="0 0 19 21"
    >
      <g>
        <g>
          <path
            fill="#fff"
            d="M18.994 9.182l-3.8-3.938V7.87H8.86v2.625h6.333v2.625zm-6.333 2.625v3.937H7.594V3.932L2.527 1.307h10.134v5.25h1.266V-.006H-.006v17.063l7.6 3.937v-3.937h6.333v-5.25z"
          />
        </g>
      </g>
    </svg>
  ),
  close: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      viewBox="0 0 46 46"
    >
      <g>
        <g>
          <path
            fill="#000000"
            d="M0 23C0 10.297 10.297 0 23 0s23 10.297 23 23-10.297 23-23 23S0 35.703 0 23z"
            className="t1"
          />
        </g>
        <g>
          <path
            fill="#ffffff"
            d="M25.596 22.955l6.973-6.974a1.16 1.16 0 1 0-1.64-1.64l-6.974 6.973-6.974-6.974a1.16 1.16 0 1 0-1.64 1.641l6.973 6.974-6.974 6.974a1.159 1.159 0 0 0 .82 1.98c.298 0 .595-.113.821-.34l6.974-6.973 6.974 6.974a1.157 1.157 0 0 0 1.64 0 1.159 1.159 0 0 0 0-1.641z"
            className="t2"
          />
          <path
            fill="none"
            stroke="#ffffff"
            strokeMiterlimit="20"
            d="M25.596 22.955v0l6.973-6.974a1.16 1.16 0 1 0-1.64-1.64l-6.974 6.973v0L16.98 14.34a1.16 1.16 0 1 0-1.64 1.641l6.973 6.974v0l-6.974 6.974a1.159 1.159 0 0 0 .82 1.98c.298 0 .595-.113.821-.34l6.974-6.973v0l6.974 6.974a1.157 1.157 0 0 0 1.64 0 1.159 1.159 0 0 0 0-1.641z"
            className="t2"
          />
        </g>
      </g>
    </svg>
  ),
  question: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
    >
      <g>
        <g>
          <image
            width="17"
            height="17"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABP0lEQVQ4T6XUPSjuYRjH8c/DYlMmdocsBoM4JZRS8pbJxmQxsAmZToeVwWLCREl5mWTApGNTwubUSWegZDKhu+7n6e7p/zx5+Y/XfV3f+7qu3+/+52R/FRjFFBpxixVs4bW4JJfBGMQvNOMUh+hHJy6xgP20LoV0YQlt+IN5HCfJPfiNVpxjFifhPEBqsI4BXGMOe3jL6DLkD2ERTTjAeAhuR8AkNpKZw17aUYsbXCXQcDaG1QAKkAfsYiJJqsQZfiaxzViYNriGkQB5iuNMJ6fVERJ2cBRV6UWIPyd5y/lxsiDpbT/igh/RUrSnD0EacIG/6MO/r0CCjEGJOvzPUOtDnXREo82UcHYBkqVOvmYY3QiQlwxQQZ1SPgk1OwigetyV80k5x1ZFR99HQEnH5i/41tspHvVbrziFfep/8g5IW10QfcR/fwAAAABJRU5ErkJggg=="
          />
        </g>
      </g>
    </svg>
  ),
  callIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
  ),
  suitcase: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
  ),
  moreVerticle: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
  )
};

export const ComonIcons = comonIcons;
