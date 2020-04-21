import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeProductComponent } from "../home-product/home-product.component";
import { LayoutProductComponent } from "../layout-product/layout-product.component";
import { LayoutAdminComponent } from "../layout-admin/layout-product-all.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutProductComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeProductComponent }
    ]
  },
  {
    path: "",
    component: LayoutAdminComponent,
    children: [{ path: "admin", component: LayoutAdminComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
