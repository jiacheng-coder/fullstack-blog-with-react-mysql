import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '@/context/authContext'
import useSubjects from '@/hooks/useSubjects'
import { DownOutlined, UserOutlined, SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons'
import { Dropdown, Space, Avatar, Card } from 'antd'
import { useMemo } from 'react'

const { Meta } = Card

const getItems = list => {
  return list.map(item => {
    return {
      label: (
        <Link className='link' to={`/?cat=${item.param}`}>
          {item.name}
        </Link>
      ),
      key: '0',
    }
  })
}

const Navbar = () => {
  const subjects = useSubjects()
  const items = useMemo(() => {
    return getItems(subjects)
  }, [subjects])
  const [isHovered, setIsHovered] = useState(false)
  const { currentUser, logout } = useContext(AuthContext)

  return (
    <section className='navbar-container'>
      <nav className='navbar'>
        <div className='logo'>
          <Link to='/'>
            <img src='http://sci.cqu.edu.cn/xwz/images/logo.png' alt='' />
          </Link>
        </div>
        <Space size={'large'}>
          <Dropdown
            menu={{
              items,
            }}
          >
            <text>文章类别</text>
          </Dropdown>
          <text>主题二</text>
          <text>主题三</text>
          <text>主题四</text>
          <text>主题五</text>
          {/* {subjects.map(item => {
            return (
              <Link className='link' to={`/?cat=${item.param}`}>
                <h6>{item.name}</h6>
              </Link>
            )
          })} */}
          {/* <span>欢迎您，{currentUser?.username}~</span> */}
          {/* {currentUser ? (
          <span onClick={logout}>退出登录</span>
        ) : (
          <Link className='link' to='/login'>
            登录
          </Link>
        )} */}
          {/* <span className='write'>
            <Link className='link' to='/write'>
              写文章
            </Link>
          </span> */}
          <Avatar size={48} icon={<UserOutlined />} onClick={() => setIsHovered(preVal => !preVal)} />
        </Space>
      </nav>
      {isHovered && (
        <Card
          style={{ width: 300 }}
          className='personal-info-card'
          // cover={<img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />}
          actions={[
            <Space>
              <text>我的设置</text>
            </Space>,
            <text>退出登录</text>,
          ]}
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
        >
          <Meta avatar={<Avatar size={48} icon={<UserOutlined />} />} title={currentUser?.username} description='信息与计算科学专业 20201859' />
        </Card>
      )}
    </section>
  )
}

export default Navbar
