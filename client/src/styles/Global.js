import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

	a {
		color: ${({ theme }) => theme.shift.text};
		&:hover {
			color: #00adb5;
		}
	}

	input, label, textarea {
		display: block;
	}

	html {
		max-width: 1350px;
		margin: auto;
		background: ${({ theme }) => theme.shift.html};
		background-image: ${({ theme }) => theme.shift.bilde};
		object-fit: fill;
		transition: 1.5s;
	}

	.gridview{
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;;
		@media(max-width: 1350px) {
			grid-template-columns: repeat(3, 1fr);
		}
		@media(max-width: 1000px) {
			grid-template-columns: repeat(2, 1fr);
			justify-content: center;
		}
		@media(max-width: 650px) {
			grid-template-columns: repeat(1, 1fr);
			justify-content: center;
		}
	}

	.listview{
		display: grid;
	}

	.articlegridview, .articlelistview {
		display: grid;
		border: 1px solid #ddd;
		margin: 10px auto;
		position: relative;
		background-color: white;
  	&:hover {
    	box-shadow: 4px 4px 10px #999;
 	 	}
		& img {
			width: 300px;
			height: 373px;
		}
	}

	.articlegridview {
		grid-template-rows: 373px;
		width: 300px;
	}

	.articlelistview {
		grid-template-columns: auto 1fr;
		gap: 20px;
		width: 100%;
		height: 373px;
	}

	.featuredimage, .featuredarticleimage {
		&::before {
			display: block;
			position: absolute;
			background: #810034;
			color: #fed049;
			content: 'FEATURED ⭐';
			text-align: center;
			width: 100%;
			height: 60px;
			line-height: 60px;
			font-size: 40px;
		}
	}

	.featuredimage {
		&::before {
			bottom: 5px;
		}
	}

	.featuredarticleimage {
		&::before {
			bottom: 0;
		}
	}

	/*90% av stylingen under er hentet fra W3-schools toggle-knapp-eksempel. Også kraftig inspirert i koden som ligger i Toggle.js: https://www.w3schools.com/howto/howto_css_switch.asp */
	.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
	cursor: pointer;
  }
  
  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.teal};
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${({ theme }) => theme.colors.black};
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-color: ${({ theme }) => theme.colors.white};
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px ${({ theme }) => theme.shift.background};
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
`;

export default GlobalStyles;
