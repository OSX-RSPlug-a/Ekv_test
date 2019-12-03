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
                <a href="">
                <i class="material-icons">account_box</i>
                <span class="nav-text">Users</span>
                </a>
            </li>   
            <li class="has-subnav">
                <a href="">
                <i class="material-icons">store</i>
                <span class="nav-text">Custumers</span>
            </a>
            </li>
            <li class="has-subnav">
                <a href="">
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
    <div class="card-tb">
    
      <h1>Custumers</h1>

      <table class="table table-action">

      <thead>
        <tr>
          <th class="t-small"></th>
          <th class="t-small">ID</th>
          <th class="t-medium">Enterprise</th>
          <th>Info</th>
          <th class="t-medium">State</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td><label><input type="checkbox"></label></td>
          <td>1</td>
          <td>DudeBug</td>
          <td>One little text</td>
          <td class="t-status t-active">Active</td>
        </tr>
        <tr>
          <td><label><input type="checkbox"></label></td>
          <td>1</td>
          <td>DudeBug</td>
          <td>One little text</td>
          <td class="t-status t-inactive">Inactive</td>
        </tr>
        <tr>
          <td><label><input type="checkbox"></label></td>
          <td>1</td>
          <td>DudeBug</td>
          <td>One little text</td>
          <td class="t-status t-draft">Draft</td>
        </tr>
        <tr>
          <td><label><input type="checkbox"></label></td>
          <td>1</td>
          <td>DudeBug</td>
          <td>One little text</td>
          <td class="t-status t-scheduled">Scheduled</td>
        </tr>
      </tbody>
    </table>
    <footer>
      <ul class="pagination">
        <li>
          <a href="#">First</a>
        </li>
        <li class="elip">
          ...
        </li>
        
        <li>
          <a href="#" class="active">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        
        <li class="elip">
          ...
        </li>
        <li>
          <a href="#">Last</a>
        </li>
      </ul>
    </footer>
    </div>
</div>
</template>

<script>


export default {
  name: 'Clientes',
  goDash() {
        this.$router.replace({ name: "dashboard" });
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
        margin-bottom: 2%;
        border-top: 5px solid #435757;
        background: #fff;
        box-shadow: 10px 10px 0 0px rgba(0, 0, 0, .1);
    }

    .card-tb > h1 {
        margin: 0 0 20px 0;
        padding: 20px;
        background-color: rgba(255, 255, 255, .4);
        font-size: 1.8em;
        text-align: center;
    }

    table {
        font-family: arial;
        max-width: 100%;
        background-color: transparent;
        border-collapse: collapse;
        border-spacing: 0;
  }

  .table {
        width: 100%;
        margin-bottom: 20px;
  }

  .table th,
  .table td {
        font-weight: normal;
        font-size: 12px;
        padding: 8px 15px;
        line-height: 20px;
        text-align: left;
        vertical-align: middle;
        border-top: 1px solid #dddddd;
  }

  .table thead th {
        background: #eeeeee;
        vertical-align: bottom;
  }

  .table tbody > tr:nth-child(odd) > td,
  .table tbody > tr:nth-child(odd) > th {
        background-color: #fafafa;
  }

  .table .t-small {
        width: 5%;
  }

  .table .t-medium {
        width: 15%;
  }

  .table .t-status {
        font-weight: bold;
  }

  .table .t-active {
        color: #46a546;
  }

  .table .t-inactive {
        color: #e00300;
  }

  .table .t-draft {
        color: #f89406;
  }

  .table .t-scheduled {
        color: #049cdb;
  }

  .pagination {
	  display: block;
    padding-bottom: 5px;
    padding: 0;
    list-style: none;
  }

	.pagination li {
		display: inline-block;
  }
	
  .pagination a {
			display: block;
			border: 1px solid #000000;
			padding: .25rem .6rem;
			color: #000000;
			text-decoration: none;
			transition: .3s ease-in-out;
  }

  .pagination a:hover {
				color: #FFFFFF;
				background: #000000;
  }

	.pagination	a.active {
			color: #FFFFFF;
			background: #000000;
  }

	.pagination li.elip{
		margin: 0 .5rem;
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
    .table-action thead {
      display: none;
    }
    .table-action tr {
      border-bottom: 1px solid #dddddd;
    }
    .table-action td {
      border: 0;
    }
    .table-action td:not(:first-child) {
      display: block;
    }
  }


</style>
