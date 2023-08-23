export default function() {
  return [
    {
      title: "Profile",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Trading",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts",
    },
    {
      title: "Client tarifs",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post",
    },
    {
      title: "Partner tarifs",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "Finance",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    {
      title: "Forecast",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Notification",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    },
    {
      title: "Network",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    }
  ];
}
