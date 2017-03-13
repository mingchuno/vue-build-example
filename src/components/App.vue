<template>
  <div id="app" class="phone-viewport">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">Example App</h2>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-medium">
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
        </div>
      </md-toolbar>

      <md-list>
        <md-list-item @click.native="route('/example')">
          <md-icon>move_to_inbox</md-icon> <span>Example</span>
        </md-list-item>
        <md-list-item @click.native="route('/example2')">
          <md-icon>send</md-icon> <span>Example2</span>
        </md-list-item>
        <md-list-item @click.native="route('/example3')">
          <md-icon>send</md-icon> <span>Example3</span>
        </md-list-item>
      </md-list>

    </md-sidenav>

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    route(herf) {
      this.$refs.leftSidenav.toggle();
      this.$router.push(herf)
    },
    open(ref) {
      console.log('Opened: ' + ref);
    },
    close(ref) {
      console.log('Closed: ' + ref);
    }
  }
};
</script>
