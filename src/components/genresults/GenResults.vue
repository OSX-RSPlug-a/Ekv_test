<template>
<div>
<nav class="menu">
		<ul>
            <li>
                <a href="" @click="goDash">
                <i class="material-icons">dashboard</i>
                <span class="nav-text">Dashboard</span>
                </a>
            </li>
            <li class="has-subnav">
                <a href="#">
                <i class="material-icons">account_box</i>
                <span class="nav-text">Users</span>
                </a>
            </li>   
            <li class="has-subnav">
                <a href="#">
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
    
    <div class="container-bq">
        
        <blockquote>
             <h2>Colaboradores</h2>
            <h1>2000</h1>
        </blockquote>

        <blockquote>
             <h2>Colaboradores</h2>
            <h1>2000</h1>
        </blockquote>
    
        <blockquote>
            <h2>Colaboradores</h2>
            <h1>2000</h1>
        </blockquote>

        <blockquote>
            <h2>Colaboradores</h2>
            <h1>2000</h1>
        </blockquote>

    </div>

    <div class="card-tb">
    
      <h1>Users</h1>

       <GChart
        type="ColumnChart"
        :data="chartData"
        :options="chartOptions"
        />
      
    </div>
</div>
</template>

<script>


export default {
  name: 'Users',
  goDash() {
        this.$router.replace({ name: "Dashboard" });
  },
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      }
    }
  }
}


</script>

<style scoped lang="scss">

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

        .card-tb{
            display: block;
            align-items: center;
            max-width: 50em;
            margin: 0 auto;
            padding-bottom: 5vh;
            border-top: 5px solid #435757;
            background: #fff;
            box-shadow: 10px 10px 0 0px rgba(0, 0, 0, .1);
        }

        .card-tb > h1 {
            margin: 0 0 50px 0;
            padding: 20px;
            background-color: rgba(255, 255, 255, .4);
            font-size: 1.8em;
            text-align: center;
        }

        .container-bq {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            flex-grow: 1;
            align-content: center;
            margin: 0 auto;
            margin-bottom: 5vh;
            max-width: 650px;
        }

        blockquote {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            flex-grow: 1;
            align-content: center;
            border-inline-start: 4px solid #435757;
            padding: 0.75rem;
            padding-inline-start: 2rem;
            background-color: #f5f5f5;
            width: 150px;
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
