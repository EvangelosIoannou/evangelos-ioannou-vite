import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { SidebarProvider } from "./sidebarContext";

export default function AdminDashboard() {
  return (
    <SidebarProvider>
      <AdminDashboardContainer>
        <Sidebar />
        <Content />
      </AdminDashboardContainer>
    </SidebarProvider>
  );
}

const AdminDashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
`;
