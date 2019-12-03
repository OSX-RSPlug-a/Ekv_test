<template>
  <div>
	<header>
		<div Name="navM">
			<ul Name="menu2">					
				<li className="item"><a href="#top"><i class="material-icons" title="Menu/User">perm_identity</i>Admin</a></li>
			</ul>
				</div>
	</header>
    <nav class="menu">
		<ul>
            <li>
                <a href="#top" >
                <i class="material-icons">dashboard</i>
                <span class="nav-text">Dashboard</span>
                </a>
            </li>
            <li class="has-subnav">
                <a href="#" @click="goUs">
                <i class="material-icons">account_box</i>
                <span class="nav-text">Users</span>
                </a>
            </li>   
            <li class="has-subnav">
                <a href="#" @click="goCls">
                <i class="material-icons">store</i>
                <span class="nav-text">Custumers</span>
            </a>
            </li>
            <li class="has-subnav">
                <a href="#">
                <i class="material-icons">settings_applications</i>
                <span class="nav-text">Settings</span>
                </a>
            </li>
            </ul>
            <ul class="logout">
                <li>
                    <a href="" @click="signOut">
                    <i class="material-icons">exit_to_app</i>
                    <span class="nav-text">Logout</span>
                    </a>
                </li>
		    </ul>
    </nav>
	<div class="container-2">
		<div class="cards">
			<i class="material-icons">public</i>
			<p>LGPD Law</p>
			<p><a id="hw_button" href="#openModal" >About</a></p>
		</div>
		<div class="cards">
			<i class="material-icons">assessment</i>
			<p>Data overview from Eskive</p>
			<p><a id="hw_button" href="#openModal" >About</a></p>
		</div>
		<div class="cards">
			<i class="material-icons">chrome_reader_mode</i>
			<p>What's fishing?</p>
			<p><a id="hw_button" href="#openModal" >About</a></p>
		</div>
	</div>
	<div class="container-1">
		<a href="" @click="goGenRes"><div class="cards-1">
			<p><i class="material-icons">donut_small</i></p>
				<p>General Results</p>
		</div></a>
		<a href="#openModal" ><div class="cards-1">
			<p><i class="material-icons">assessment</i></p>
			<p>Results by Department</p>
		</div></a>
		<a href="#openModal" ><div class="cards-1">
			<p><i class="material-icons">assignment_ind</i></p>
			<p>Results by employee</p>
		</div></a>
		<a href="#openModal" ><div class="cards-1">
			<p><i class="material-icons">assignment</i></p>
			<p>Reports</p>
		</div></a>
	</div>
</div>
</template>

<script>
export default {
  name: 'Dashboard',
  methods: {
    signOut() {
        this.$router.replace({ name: "Login" });
	},
	goUs() {
        this.$router.replace({ name: "Users" });
	},
	goCls() {
        this.$router.replace({ name: "Clientes" });
	},
	goGenRes() {
        this.$router.replace({ name: "GenResults" });
    }
  }
}
</script>

<style scoped lang="scss">

	header {
	    position: absolute;
	    top: 0;
	    padding: 0px;
	    min-width: 100%;
	    min-height: 75px;
	    display: flex;
	    justify-content: space-around;
	    align-items: center;
	    background: #eee;
	    margin-bottom: 5%;
	    text-align: center;
	  }

	  header ul {
	    min-width: 60vw;
	    display: flex;
	    flex-direction: row;
		text-align: center;
	    justify-content: space-around;
	    list-style-type: none;
		align-items: center;
	  }

	  header a:hover {
	    color: #000000;
	    text-decoration: underline;
	    text-decoration: none;
	  }

	  header li {
		display: inline-block;
	    list-style: none;
	  }

	  header a {
	    color:#71706C;
	    text-decoration: none;
	  }

	 .menu2 {
	    display: flex;
	    flex-wrap: wrap;
	    justify-content: space-between;
	    align-items: center;
	  }

	  .menu2 li {
		display: inline;
	    font-size: 16px;
	    padding: 15px 5px;
	    white-space: nowrap;
	  }

	  div.navM {
	    padding-bottom: 1%;
	    padding-top: 1%;
	    margin-bottom: 10%;
	  }

	  header i {
	    display: inline-flex;
	    align-items: center;
	    justify-content: center;
	    vertical-align: middle;
	    font-size: 60px;
	  }

		div {
			height: 100%;
			width: 100%;
		}

		nav {
			float: left;
			background: #e2e2e2;
			width: 100%;
			height: 100%;
			-webkit-user-select:none;
			-moz-user-select:none;
			-ms-user-select:none;
			-o-user-select:none;
			user-select:none;
		}

		nav ul,nav li {
			outline:0;
			margin:0;
			padding:0;
		}

		.menu li:hover > a,
		nav.menu li.active > a,
		.dropdown-menu > li > a:hover,
		.dropdown-menu>li>a:focus,
		.dropdown-menu>.active>a,
		.dropdown-menu>.active>a:hover,
		.dropdown-menu>.active>a:focus,
		.no-touch .dashboard-page nav.dashboard-menu ul li:hover a,
		.dashboard-page nav.dashboard-menu ul li.active a {
			color:#fff;
			background-color:#5fa2db;
		}

		.menu:hover,nav.menu.expanded {
			width:250px;
			overflow:visible;
		}

		.menu {
			background: #040021;
			border-right: 1px solid #e5e5e5;
			position: absolute;
			top: 0;
			bottom: 0;
			height: 100%;
			left: 0;
			width: 60px;
			overflow: hidden;
			--webkit-transition: width .05s linear;
			transition: width .05s linear;
			--webkit-transform: translateZ(0) scale(1,1);
			z-index: 1000;
		}

		.menu > ul {
			margin: 7px 0;
		}

		.menu li {
			position: relative;
			display: block;
			width: 250px;
		}

		.menu li > a {
			position: relative;
			display: table;
			border-collapse: collapse;
			border-spacing: 0;
			color:#999;
			font-family: arial;
			font-size: 14px;
			text-decoration: none;
			--webkit-transform: translateZ(0) scale(1,1);
			--webkit-transition: all .1s linear;
			transition: all .1s linear;
		}

		.menu .nav-text {
			position: relative;
			display: table-cell;
			vertical-align: middle;
			width: 190px;
			font-family: 'Titillium Web', sans-serif;
		}

		.menu > ul.logout {
			position: absolute;
			display: inline-block;
			left: 0;
			bottom: 0;
		}

		.no-touch .scrollable.hover {
			overflow-y: hidden;
		}

		.no-touch .scrollable.hover:hover {
			overflow-y: auto;
			overflow: visible;
		}

		a:hover,a:focus {
			text-decoration: none;
		}

		.menu i {
			font-size: 60px;
			color: #d3d3d3;
			padding-right: 0;
			margin-left: 0,3em;
		}

		.container-2 {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			text-align: center;
			justify-content: center;
			max-width: 1000px;
			margin: auto;
			margin-top: 100px;
		}

		.cards {
			background: #FFFFFF;
			border-radius: 200px;
			box-shadow: 8px 8px 6px 4px rgba(0, 0, 0, .6);
			-moz-border-radius: 10px;
			-o-border-radius: 10px;
			-ms-border-radius: 10px;
			width: 200px;
			height: 200px;
			padding: 20px;
			margin: 20px;
		}

		.cards p {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			text-align: center;
			justify-content: center;
			margin-bottom: 2vh;
			font-size: 25px;
		}

		.cards a {
			border: 3px solid #0A1045;
			height: 30px;
			width: 120px;
			border-radius: 25px;
			-moz-border-radius: 25px;
			-webkit-border-radius: 25px;
			background: transparent;
			color: #0A1045;
			transition: 1s;
			font-family:'Russo One', sans-serif;
			font-size: 20px;
			vertical-align: middle;
			text-decoration: none;
		}

		.cards p a:hover {
			box-shadow: 0 0 0 2em #0A1045 inset;
			color: white;
			background: #0A1045;
			text-decoration: none;
		}

		.cards .material-icons {
		display: flex;
		align-items: center;
		justify-content: center;
		vertical-align: middle;
		font-size: 40px;
		}

		.container-1 {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			text-align: center;
			justify-content: center;
			max-width: 1000px;
			margin: auto;
			margin-top: 100px;
		}

		.cards-1 {
			background: #FFFFFF;
			border-radius: 25px;
			box-shadow: 8px 8px 6px 4px rgba(0, 0, 0, .6);
			-moz-border-radius: 10px;
			-o-border-radius: 10px;
			-ms-border-radius: 10px;
			width: 200px;
			height: 200px;
			padding: 20px;
			margin: 20px;
		}

		.cards-1 p {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			text-align: center;
			justify-content: center;
			margin-bottom: 3vh;
			font-size: 25px;
		}

		.container-1 a {
			text-decoration: none;
			color: #000000;
		}

		.container-1 a:hover {
			opacity: 0.6;
			text-decoration: none;
		}

		.cards-1 .material-icons {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		vertical-align: middle;
		font-size: 60px;
		color: #0A1045;
		}

		@media screen and(min-width: 320px) and (max-width: 480px){
			.menu {
				width: 40px;
				min-height: 400%;
				max-height: 100%;
			}
			.menu i {
				font-size: 39px;
			}
			div {
				padding-left: 10px;
			}
		}


</style>
