import MenuData from './menu.json';

function searchMenuId(id, menu) {
  let menuList = menu;
  let result = {};
  if (Array.isArray(menuList)) {
    // checking if the given menu data is an array or not thus process it accordingly
    for (let i = 0; i < menuList.length; i++) {
      if (menuList[i].component === id) {
        // checking if the report id is matching to the component
        result = menuList[i]; // assigning the menuitem to result for further processing if id matches
      }
      if (
        !result.children &&
        menuList[i].children &&
        menuList[i].children.length > 0
      ) {
        const res = searchMenuId(id, menuList[i].children); // calling the recursive function to iterate the sub menu items
        if (res.component) {
          result = res; // if the function returns a menu item we are updating the result
        }
      }
      if (result.children && result.children.length > 0) {
        const res = searchMenuId(id, result.children); // calling the recursive function to iterate the sub menu items if the matching menu item has children to get the specific report
        if (res) {
          result = res; // if the function returns a menu item we are updating the result
        }
      }
    }
  } else {
    if (menuList.component === id) {
      // checking if the report id is matching to the component
      result = menuList; // assigning the menuitem to result for further processing if id matches
    }
    if (menuList.children && menuList.children.length > 0) {
      result = searchMenuId(id, menuList.children); // calling the recursive function to iterate the sub menu items
    }
  }
  return result;
}
export function getMenuByReportId(id) {
  return searchMenuId(id, MenuData.siteMenu); // calling a recursive function to iterate through the menuData to get the report details based on id
}
