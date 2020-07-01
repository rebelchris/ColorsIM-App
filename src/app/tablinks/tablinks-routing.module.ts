import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TablinksPage } from "./tablinks.page";

const routes: Routes = [
  {
    path: "",
    component: TablinksPage,
    children: [
      {
        path: "color",
        loadChildren: () =>
          import("../color/color.module").then((m) => m.ColorPageModule),
      },
      {
        path: "users",
        loadChildren: () =>
          import("../users/users.module").then((m) => m.UsersPageModule),
      },
      {
        path: "settings",
        loadChildren: () =>
          import("../settings/settings.module").then(
            (m) => m.SettingsPageModule
          ),
      },
      {
        path: "",
        redirectTo: "/tabs/user",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
