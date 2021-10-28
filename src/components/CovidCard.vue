<template>
  <div class="card">
      <header class="card-header">
          <p class="card-header-title">
              {{country.Country}}
          </p>
      </header>
      <div class="card-content">
          <div class="content">
              <table class="table is-striped is-hoverable">
                  <tbody>
                      <tr>
                          <th>Total Confirmed:</th>
                          <td>11111</td>
                      </tr>
                      <tr>
                          <th>Total Deaths:</th>
                          <td>11111</td>
                      </tr>
                      <tr>
                          <th>Total Recovered:</th>
                          <td>11111</td>
                          
                      </tr>
                      <tr>
                          <th>New Confirmed:</th>
                          <td>11111</td>
                      </tr>
                      <tr>
                          <th>New Deaths:</th>
                          <td>11111</td>
                      </tr>
                      <tr>
                          <th>New Recovered:</th>
                          <td>11111</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['country']
}
</script>

<style>

</style>