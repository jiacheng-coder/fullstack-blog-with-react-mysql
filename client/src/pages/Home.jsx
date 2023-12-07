import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GET } from '@/request'

const Home = () => {
  const [posts, setPosts] = useState([])

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const data = await GET(`/api/posts/${cat}`)
        const data = [
          {
            id: 1,
            title: 'test for publish post',
            desc: '<h1>JS Pratice</h1><p><br></p><p>Here we go!</p><ul><li>arrow function</li><li>curry</li><li>debounce</li><li>throttle</li></ul>',
            img: '',
            date: '2023-05-19T04:20:05.000Z',
            uid: 2,
            cat: 'art',
          },
          {
            id: 6,
            title: 'MySQL数据库管理系统',
            desc: '<p>MySQL是一种关系型数据库管理系统。它是由瑞典MySQL AB公司开发的，现在属于Oracle公司。MySQL语言是用于管理和操作MySQL数据库的语言。它支持各种操作，如创建、删除、修改和查询表格，以及添加、删除和修改数据记录。MySQL语言使用标准SQL语法，同时还提供了特定于MySQL的扩展。它是一种强大的数据库语言，广泛用于Web开发和其他应用程序开发领域。</p>',
            img: '1684636755971å¥½å¥½çæ´».png',
            date: '2023-05-21T02:39:15.000Z',
            uid: 2,
            cat: 'art',
          },
          {
            id: 7,
            title: 'Javascript语言',
            desc: '<p>JavaScript是一种高级的、解释型的编程语言，常用于编写Web应用程序。它是一种动态类型语言，具有弱类型特性，并且可以在客户端和服务器端运行。JavaScript最初由Netscape公司开发，现在由ECMA国际组织维护和更新。</p><p>JavaScript通常用于实现Web应用程序的动态交互和用户界面控制，它可以与HTML和CSS结合使用。此外，JavaScript还可以用于开发后端Web应用程序，例如Node.js。</p><p>总之，JavaScript是一种在Web应用程序开发中非常重要的语言，具有广泛的应用和发展前景。</p><p><br></p><p>666</p>',
            img: '',
            date: '2023-05-21T02:40:20.000Z',
            uid: 2,
            cat: 'science',
          },
          {
            id: 9,
            title: '第一章 - 数学分析的定义',
            desc: '<p>数学分析测试文章</p>',
            img: '',
            date: '2023-12-04T10:44:40.000Z',
            uid: 9,
            cat: 'Mathematical Analysis',
          },
        ]
        setPosts(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [cat])

  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  // ];

  const getText = html => {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent
  }

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map(post => (
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={`../upload/${post.img}`} alt='' />
            </div>
            <div className='content'>
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <button>查看更多</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
