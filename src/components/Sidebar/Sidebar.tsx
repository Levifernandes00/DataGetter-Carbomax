import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useUserContext } from '../../hooks/contexts/UserProvider';
import NotificationDropdown from '../Dropdowns/NotificationDropdown';
import UserDropdown from '../Dropdowns/UserDropdown';

const Sidebar: React.FC = () => {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  const { user } = useUserContext()

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-gray-900 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-gray-900 m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href={`/companies/${user?.uid}/dashboard`}>
            <a
              href="#pablo"
              className="md:block text-left md:pb-2 text-white mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            >
              CP
            </a>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href={`/companies/${user?.uid}/dashboard`}>
                    <a
                      href="#pablo"
                      className="md:block text-left md:pb-2 text-white mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      CP
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-gray-200 placeholder-gray-300 text-white bg-gray-700 rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-gray-100 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              USER PAGES
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href={`/companies/${user?.uid}/dashboard`}>
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname === `/companies/${user?.uid}/dashboard`
                        ? "text-blue-500 hover:text-blue-600"
                        : "text-gray-400 hover:text-gray-300")
                    }
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (router.pathname === `/companies/${user?.uid}/dashboard`
                          ? "opacity-75"
                          : "text-gray-300")
                      }
                    ></i>{" "}
                    Dashboard
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link  href={`/companies/${user?.uid}/history`}>
                  <a
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/history") !== -1
                        ? "text-blue-500 hover:text-blue-600"
                        : "text-gray-400 hover:text-gray-300")
                    }
                  >
                    <i
                      className={
                        "fas fa-tools mr-2 text-sm " +
                        (router.pathname.indexOf("/history") !== -1
                          ? "opacity-75"
                          : "text-gray-300")
                      }
                    ></i>{" "}
                    History
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
