<template>
  <nav class="navbar-wrapper">
    <div class="">
      <div class="container header">
        <div>
          <div class="logo-section">
            <span @click="toggleSideBar"><img src="../../assets/icon/burger.svg" alt="" width="30" ></span>
          </div>
          <img class="logo" src="../../assets/logo.png" alt="" width="30" height="30">
          <div class="title">AUTOMATION DASHBOARD</div>
        </div>
        <div class="account">
          <img class="avatar" src="../../assets/user.jpg" alt="" width="32" height="32">
          <div class="label">Wade Warren</div>
        </div>
      </div>
      <div v-if="isOpenSideBar" class="side-bar" ref="sidebar">
        <span @click="closeSidebar" class="cancel">
          <img src="../../assets/icon/cancel.svg" alt="" width="25">
        </span>
        <router-link @click="closeSidebar" to="/" class="side-bar-link">
          <div>DASHBOARD</div>
        </router-link>
        <div class="sidebar-dropdown">
          <button @click="toggleDropdown">
            <div>BFM HOME</div>
            <img src="../../assets/icon/arrow-bottom-light.svg" width="20" height="20" alt="">
          </button>
          <div v-if="isOpen" class="sidebar-dropdown-container">
            <router-link @click="closeDropdown()" to="/bfm" class="dropdown-link">Feed BFM Data</router-link>
            <router-link @click="closeDropdown()" to="/check-batch-status" class="dropdown-link">Check Batch Status</router-link>
            <router-link @click="closeDropdown()" to="/ndc" class="dropdown-link">Search Availability and
              Fares</router-link>
          </div>
        </div>
        <router-link @click="closeSidebar" to="/ndc" class="side-bar-link">
          <div>NDC HOME</div>
        </router-link>
        <router-link @click="closeSidebar" to="/terms" class="side-bar-link">
          <div>LEARN DST</div>
        </router-link>
        <router-link @click="closeSidebar" to="/learn" class="side-bar-link">
          <div>GDS ARTICLES</div>
        </router-link>
        <router-link @click="closeSidebar" to="/about" class="side-bar-link">
          <label>ABOUT</label>
        </router-link>
        <router-link @click="closeSidebar" to="/proxy" class="side-bar-link">
          <label>PRIVACY</label>
        </router-link>
        <router-link @click="closeSidebar" to="/terms" class="side-bar-link">
          <label>LEARN DST</label>
        </router-link>
      </div>
    </div>
    <div class="container navbar">
      <div class="left-nav">
        <router-link to="/" class="nav-link">
          <img src='../../assets/icon/home.svg' width="20" height="20" alt="">
          <div>DASHBOARD</div>
        </router-link>
        <div class="dropdown" ref="dropdown">
          <button @click.stop="toggleDropdown">
            <img src='../../assets/icon/chart.svg' width="20" height="20" alt="">
            <div>BFM HOME</div>
            <img src="../../assets/icon/arrow-bottom.svg" width="20" height="20" alt="">
          </button>
          <div v-if="isOpen" class="dropdown-container">
            <router-link @click="closeDropdown()" to="/bfm" class="dropdown-link">Feed BFM Data</router-link>
            <router-link @click="closeDropdown()" to="/check-batch-status" class="dropdown-link">Check Batch Status</router-link>
            <router-link @click="closeDropdown()" to="/ndc" class="dropdown-link">Search Availability and
              Fares</router-link>
          </div>
        </div>
        <router-link to="/ndc" class="nav-link">
          <img src='../../assets/icon/withdrawal.svg' width="20" height="20" alt="">

          <div>NDC HOME</div>
        </router-link>
        <router-link to="/dst" class="nav-link">
          <img src='../../assets/icon/users.svg' width="20" height="20" alt="">

          <div>LEARN DST</div>
        </router-link>
        <router-link to="/learn" class="nav-link">
          <img src='../../assets/icon/notes.svg' width="20" height="20" alt="">

          <div>GDS ARTICLES</div>
        </router-link>
      </div>
      <div class="right-nav">
        <div class="health-container">
          <button class="health" @click="toggleHealth"><img src="../../assets/icon/health.webp" alt="" width="40" height="40"></button>
          <div ref="health" v-if="isHealth" class="health-content">
            <div>Current System Status: HEALTHY</div>
            <div>Current Production Build: 845ER45</div>
            <div>Current Build Date: AUG 8 2024-3PM MST</div>
          </div>
        </div>
        <div class="">
          <router-link to="/about" class="nav-link">
            <label>ABOUT</label>
          </router-link>
          <router-link to="/proxy" class="nav-link">
            <label>PRIVACY</label>
          </router-link>
          <router-link to="/terms" class="nav-link">
            <label>TERMS</label>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
  
<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'StyledHeader',

  setup() {
    const isOpen = ref(false);
    const isOpenSideBar = ref(false);
    const isHealth = ref(false);

    const dropdown = ref(null);
    const sidebar = ref(null);
    const health = ref(null);

    const toggleDropdown = (event) => {
      event.stopPropagation();
      isOpen.value = !isOpen.value;
    }

    const closeDropdown = () => {
      isOpen.value = false;
    }

    const closeSidebar = () => {
      isOpenSideBar.value = false;
    }

    const toggleSideBar = (event) => {
      event.stopPropagation();
      isOpenSideBar.value = !isOpenSideBar.value;
    }

    const onOutsideSidebar = (e) => {
      if (!!isOpenSideBar.value && sidebar.value && !sidebar.value.contains(e.target)) {
        closeSidebar();
      }
    }

    const onOutsideDropdown = (e) => {
      if (dropdown.value && !dropdown.value.contains(e.target)) {
        closeDropdown();
      }
    }

    const toggleHealth = (e) => {
      e.stopPropagation();
      isHealth.value = !isHealth.value;
    }

    const onCloseHealth = () => isHealth.value = false;

    onMounted(() => {
      document.addEventListener('click', onOutsideDropdown);
      document.addEventListener('click', onOutsideSidebar);
      document.addEventListener('click', onCloseHealth);
    });

    onBeforeUnmount(() => {
      document.removeEventListener('click', onOutsideDropdown);
      document.removeEventListener('click', onOutsideSidebar);
      document.removeEventListener('click', onCloseHealth);
    })

    return {
      dropdown,
      isOpen,
      sidebar,
      isOpenSideBar,
      health,
      isHealth,
      toggleDropdown,
      closeDropdown,
      toggleSideBar,
      closeSidebar,
      toggleHealth
    }
  }
};
</script>
  
<style scoped>
.navbar-wrapper {
  box-shadow: rgba(104, 104, 104, 0.35) 0px 1px 3px;
  display: flex;
  flex-direction: column;

  &>:first-child {
    color: white;
    background-color: rgb(17 24 39);
    padding: 20px 0;
    position: relative;

    .header {
      display: flex;
      justify-content: space-between;

      &>:first-child {
        display: flex;
        gap: 4em;
        align-items: center;

        .logo-section {
          display: flex;
          align-items: center;
          gap: .5em;
        }

        img:not(.logo) {
          display: none;

          @media screen and (max-width: 669px) {
            display: block;
          }
        }
      }

      &>:last-child {

        display: flex;
        align-items: center;
        gap: 1em;

        .avatar {
          border-radius: 50%;
        }
      }

      @media screen and (max-width: 669px) {
        .label {
          display: none;
        }
      }

      @media screen and (max-width: 469px) {
        .title {
          display: none;
        }
      }
    }

    .side-bar {
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 300px;
      background-color: rgb(17 24 39);
      padding-top: 2em;
      padding-inline: 1em;
      flex-direction: column;
      gap: 1em;
      display: none;

      .side-bar-link {
        color: white;
        text-decoration: none;
        cursor: pointer;
      }

      .cancel {
        position: absolute;
        left: 260px;
        top: 20px;
      }

      .sidebar-dropdown {
        button {
          background-color: inherit;
          border: none;
          color: white;
          display: flex;
          background-color: none;
          flex-direction: row;
          padding-inline: 0;
          position: relative;
        }

        .sidebar-dropdown-container {
          position: absolute;
          top: 6em;
          left: 1em;
          right: 1em;
          border: 1px solid lightgray;
          background-color: white;
          border-radius: .5em;
          padding: .6em;
          display: flex;
          flex-direction: column;
          gap: 1em;

          .dropdown-link {
            text-decoration: none;
            color: blue;
            font-size: 14px;
            font-weight: 600;
          }
        }
      }

      @media screen and (max-width: 669px) {
        display: flex;
      }
    }
  }

  .navbar {
    padding: 10px 0;
    width: 100%;
    /* Dark blue background */
    color: white;
    display: flex;
    justify-content: space-between;

    .left-nav {
      display: flex;

      .dropdown {
        display: flex;
        align-items: center;
        position: relative;

        button {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
          border: none;
          gap: .2em;
          color: blue;
          font-weight: 600;
          font-size: 14px;
        }

        .dropdown-container {
          position: absolute;
          top: 2em;
          right: 0;
          width: 180px;
          border: 1px solid lightgray;
          background-color: white;
          border-radius: .5em;
          padding: .6em;
          display: flex;
          flex-direction: column;
          gap: .5em;

          .dropdown-link {
            text-decoration: none;
            color: blue;
            font-size: 14px;
            font-weight: 600;
          }
        }
      }
    }

    .right-nav {
      display: flex;
      gap: 5em;

      .health-container {
        position: relative;

        .health {
          cursor: pointer;
          background-color: inherit;
          border: none;
        }

        .health-content {
          position: absolute;
          top: 3.5em;
          right: -5em;
          background-color: #3073aa;
          border-radius: .7em;
          width: 300px;
          font-size: 14px;
          padding: 1em 1.2em;
          display: flex;
          flex-direction: column;
          gap: .7em;
        }
      }

      &>:last-child {
        display: flex;
      }
    }

    @media screen and (max-width: 669px) {
      display: none;
    }
  }

  .nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    text-decoration: none;
    gap: .2em;
    color: blue;
    font-weight: 600;
    font-size: 14px;
  }
}</style>
  